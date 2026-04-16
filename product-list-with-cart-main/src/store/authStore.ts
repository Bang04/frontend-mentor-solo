import { create } from "zustand";

import {
  issueAccessToken,
  issueRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
} from "../lib/jwt";
import type { AuthState, UserRole } from "../types/auth";

const TEST_USERS: Record<string, { password: string; role: UserRole }> = {
  user: { password: "1234", role: "user" },
  admin: { password: "1234", role: "admin" },
};

export const useAuthStore = create<AuthState>((set, get) => ({
  userId: null,
  role: null,
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
  authResult: null,

  login: async (id: string, password: string) => {
    const trimmedId = id.trim();

    // 요구사항 길이 체크 + 테스트 계정(user/admin)은 예외 허용
    const isTestAccount = trimmedId === "user" || trimmedId === "admin";
    if (!isTestAccount && trimmedId.length < 5) {
      set({
        authResult: { type: "error", message: "아이디는 5자 이상이어야 합니다." },
      });
      return;
    }

    if (password.length < 4) {
      set({
        authResult: { type: "error", message: "비밀번호는 4자 이상이어야 합니다." },
      });
      return;
    }

    const foundUser = TEST_USERS[trimmedId];
    if (!foundUser || foundUser.password !== password) {
      set({
        authResult: {
          type: "error",
          message: "로그인에 실패했습니다. 계정 정보를 확인해주세요.",
        },
      });
      return;
    }

    const accessToken = await issueAccessToken(trimmedId, foundUser.role);
    const refreshToken = await issueRefreshToken(trimmedId, foundUser.role);

    set({
      userId: trimmedId,
      role: foundUser.role,
      accessToken,
      refreshToken,
      isAuthenticated: true,
      authResult: { type: "success", message: "로그인 성공! 디저트 리스트로 이동하세요." },
    });
  },

  refreshAccessToken: async () => {
    const { refreshToken } = get();
    if (!refreshToken) {
      set({ authResult: { type: "error", message: "리프레시 토큰이 없습니다." } });
      return false;
    }

    const refreshPayload = await verifyRefreshToken(refreshToken);
    if (!refreshPayload || refreshPayload.type !== "refresh") {
      set({
        userId: null,
        role: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,
        authResult: {
          type: "error",
          message: "리프레시 토큰 검증 실패: 다시 로그인해주세요.",
        },
      });
      return false;
    }

    const newAccessToken = await issueAccessToken(refreshPayload.sub, refreshPayload.role);
    const accessPayload = await verifyAccessToken(newAccessToken);

    if (!accessPayload || accessPayload.type !== "access") {
      set({ authResult: { type: "error", message: "Access Token 생성에 실패했습니다." } });
      return false;
    }

    set({
      accessToken: newAccessToken,
      authResult: { type: "success", message: "새 Access Token을 발급했습니다." },
    });
    return true;
  },

  logout: () => {
    set({
      userId: null,
      role: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      authResult: { type: "success", message: "로그아웃 되었습니다." },
    });
  },

  clearAuthResult: () => set({ authResult: null }),
}));
