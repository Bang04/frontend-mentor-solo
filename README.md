# 🛒 Product List with Cart

> 장바구니 기능이 포함된 온라인 제품 목록 웹 애플리케이션

> React · Redux 기반으로 제품 리스트 → 장바구니 → 주문 확인 UX 흐름을 완성한 프로젝트입니다.

## 🚀 Live Demo

🔗 배포 링크: (Vercel URL)

## 🖼 Preview
<!-- 스크린샷 예시 -->
<!-- <img width="700" alt="product-list-preview" src="./public/assets/screen-web.png" /> -->

## 📅 프로젝트 기간

2025.02.27 ~ 2025.03.12

## 📌 주요 기능
### 🛒 장바구니 기능

- 장바구니 추가 / 삭제

- 항목 수량 증가 / 감소

- Redux 기반 상태 변경 시 UI 실시간 반영

### 📦 주문 기능

- 주문 확인을 위한 Order Modal 구현

- 장바구니 상태 기반 총 수량/총 가격 계산

### 📱 반응형 UI

- 모바일~데스크탑 반응형 레이아웃 구현

- Bulma 스타일링

## 👩‍💻 담당 역할

### Redux/State 기반
- 장바구니 추가/삭제/수량 변경 로직 구현

- 수량 변경 시 렌더링 최소화 → 성능 고려

- 반응형 UI 퍼블리싱 및 모달 UX 설계

- TypeScript로 컴포넌트 단위 타입 안정성 확보

- UI 컴포넌트 구조 설계

## 🛠 기술 스택
### Frontend
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black"/>
<img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=redux&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Bulma-00D1B2?style=flat-square&logo=bulma&logoColor=white"/>


## 📁 프로젝트 구조
```
src/
 ├── components/
 ├── pages/
 ├── redux/
 ├── types/
 ├── assets/
 ├── hooks/
 └── App.tsx
```

## 📦 설치 & 실행
```
 npm install
 npm run dev
```


```
빌드
 npm run build
```
## 📝 회고 & 개선 포인트

- Redux로 상태를 관리하며 UI 상태와 비즈니스 로직 상태 분리의 중요성을 학습

- 장바구니 수량 변경 시 불필요한 렌더링 최소화 설계 경험

### 향후 개선

- 상품 API 연동
- React Query 도입 가능성 검토
- 장바구니 로컬스토리지 저장 기능 추가
