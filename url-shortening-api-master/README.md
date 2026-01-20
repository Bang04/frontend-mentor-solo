# 🔗 URL Shortener Project

TinyURL API를 활용한 **URL 단축 서비스**입니다. 
React + TypeScript + Vite + TailwindCSS 기반으로 구현했으며,
사용자가 입력한 긴 URL을 짧은 URL로 변환하고 복사할 수 있습니다.

---

## ✨ 주요 기능

* 🔹 긴 URL을 짧은 URL로 변환 (TinyURL API)
* 📋 생성된 Short URL 복사 기능
* 🔁 복사 성공 시 `Copied!` UI 피드백 제공
* 🧾 최근 생성된 URL 리스트 표시
* ✂️ 긴 Original URL 자동 생략 처리
* 📱 반응형 UI (모바일 / 데스크탑 대응)

---

## 🛠 사용 기술

* **Frontend**

  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/>



* **API**

  * TinyURL API

---

## 📂 프로젝트 구조

```bash
src/
├─ components/
│  ├─ Header.tsx
│  ├─ Footer.tsx
│  ├─ Hero.tsx
│  ├─ Features.tsx
│  ├─ UrlForm.tsx      # URL 입력 및 단축 처리
│  ├─ TinyURL.tsx     # TinyURL API 호출 로직
│  └─ Call.tsx
├─ App.tsx
├─ main.tsx
└─ env.d.ts
```

---

## ⚙️ 환경 변수 설정

TinyURL API Key는 `.env` 파일을 통해 관리합니다.

```env
VITE_TINYURL_API_KEY=your_api_key_here
```

> ⚠️ `.env` 파일은 GitHub에 커밋되지 않도록 `.gitignore`에 포함되어 있습니다.

---

## 🚀 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

---

## 🧠 구현 포인트

### 1️⃣ Form Submit + Enter 키 지원

* `form`의 `onSubmit` 이벤트를 사용해 버튼 클릭과 Enter 키 입력 모두 처리

### 2️⃣ URL 말줄임 처리

* 30자 초과 시 `...` 처리
* 레이아웃이 깨지지 않도록 `flex + truncate` 조합 사용

### 3️⃣ Copy UX 개선

* 복사 성공 시 버튼 텍스트를 `Copied!`로 변경
* 일정 시간 후 다시 `Copy`로 복구

---

## 📸 UI 미리보기

```md
![preview](./)
```

---

## 📌 개선 예정 (Optional)

* localStorage를 활용한 URL 히스토리 저장
* 최대 URL 개수 제한
* 에러 메시지 UI 개선

