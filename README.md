# 프리온보딩 7팀 TODO LIST

## 프로젝트 소개

원티드 프리온보딩 프론트엔드 - 선발 과제 내용을 구현한 Todolist 프로젝트입니다!

선발 과제 주소 : https://github.com/walking-sunset/selection-task

## 팀원 소개

- 김민지 : [@wisdomin121](https://github.com/wisdomin121)
- 안유림 (서기) : [@anyl92](https://github.com/anyl92)
- 윤승록 (서기) : [@SeungrokYoon](https://github.com/SeungrokYoon)
- 이선근 : [@5unk3n](https://github.com/5unk3n)
- 이승원 (팀장) : [@salmontaker](hhttps://github.com/salmontaker)
- 장현정 [@JangHyunjeong](https://github.com/JangHyunjeong)

## 개발 기간

2023.08.23 ~ 2023.08.25

## 개발 환경

<img src="https://img.shields.io/badge/Node.js v18 (LTS)-grey?style=flat-square&logo=nodedotjs">
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/styled component-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white">
<img src="https://img.shields.io/badge/husky-brown?style=flat-square&logo=npm">
<img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white">
</br>

## 프로젝트 실행 방법

다음 명령어를 사용하여 프로젝트를 clone 하시거나 (git이 설치되어 있어야 합니다.)

우측 상단의 `Code` 버튼 -> `Download ZIP` 를 눌러 프로젝트를 다운로드 하실 수 있습니다.

```
git clone https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-1-7.git
```

프로젝트 다운로드가 끝났다면, 해당 디렉토리로 이동하여 프로젝트 실행에 필요한 패키지를 설치합니다.

```
npm install
```

패키지 설치가 끝났다면, 다음 명령어를 사용하여 프로젝트를 실행하실 수 있습니다!

```
npm start
```

## 배포 링크 및 데모 영상

배포 링크: https://classy-twilight-6e3a73.netlify.app/

배포는 `Netlify` 서비스를 사용했습니다.

`Netlify`로 SPA 앱을 배포할 때는 모든 경로 요청에 대해서 서버가 `index.html`에 접근할 수 있도록 설정해야하기 때문에 [`public/`](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-1-7/tree/main/public) 경로에 [`_redirect`](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-1-7/blob/main/public/_redirects) 파일을 추가했습니다.

## 아키텍쳐

### 디렉토리 구조

```
src/
├── components/
│   ├── common/
│   │   └── 공통 컴포넌트
│   └── 일반 UI컴포넌트/
│       └── 컴포넌트/
│           ├── 컴포넌트명.tsx
│           ├── 컴포넌트명.styled.tsx
│           └── types.ts
├── hooks/
│   └── 커스텀 훅
├── pages/
│   ├── HomePage
│   ├── SigninPage
│   ├── SignupPage
│   └── TodoPage
├── apis/
│   ├── instance.ts
│   ├── auth.ts
│   └── todo.ts
└── assets/
    └── 이미지, 아이콘 리소스 파일
```

### 페이지 구성

- Home: https://classy-twilight-6e3a73.netlify.app/
- SignIn: https://classy-twilight-6e3a73.netlify.app/signin
- SignUp: https://classy-twilight-6e3a73.netlify.app/signup
- Todo: https://classy-twilight-6e3a73.netlify.app/todo

※ 로그인 여부에 따라 리다이렉팅 됩니다.

### 인증 플로우 차트

### 핵심 컴포넌트 설계 다이어그램

- Form
- TodoList

## Best Practice

### 로그인/회원가입

### TODO LIST
