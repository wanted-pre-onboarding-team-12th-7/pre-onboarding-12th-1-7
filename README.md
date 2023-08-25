# 프리온보딩 7팀 TODO LIST

![MainIcon](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-1-7/assets/97281800/e1f052bb-1d7c-4e8b-8143-07ffe113c9b4)

7팀의 협업은 이렇게 진행되고 있어요! [궁금하다면 클릭!](https://www.notion.so/sonicrok/7-5fcce41bb3594680b16862082dd0324d)

## 프로젝트 소개

원티드 프리온보딩 프론트엔드 - 선발 과제 내용을 구현한 Todolist 프로젝트입니다!

선발 과제 주소 : https://github.com/walking-sunset/selection-task

## 팀원 소개

- 김민지 : [@wisdomin121](https://github.com/wisdomin121)
- 안유림 (서기) : [@anyl92](https://github.com/anyl92)
- 윤승록 (서기) : [@SeungrokYoon](https://github.com/SeungrokYoon)
- 이선근 : [@5unk3n](https://github.com/5unk3n)
- 이승원 (팀장) : [@salmontaker](https://github.com/salmontaker)
- 장현정 [@JangHyunjeong](https://github.com/JangHyunjeong)

## 개발 기간

2023.08.23 ~ 2023.08.25

## 개발 환경

<img src="https://img.shields.io/badge/Node.js v18 (LTS)-grey?style=flat-square&logo=nodedotjs"> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/styled component-DB7093?style=flat-square&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/husky-brown?style=flat-square&logo=npm"> <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint"> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white">

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

![TODO데모](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-1-7/assets/97281800/3c2953da-da17-4ed9-a30e-502b417eef58)

## 아키텍쳐

### 디렉토리 구조

```
src/
├── components  /
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
├── styles/
│   ├── DefaultTheme.ts
│   ├── font.ts
│   ├── colors.ts
│   └── fontsize.ts
└── assets/
    └── 이미지, 아이콘 리소스 파일
```

### 페이지 구성

- Home: https://classy-twilight-6e3a73.netlify.app/
- SignIn: https://classy-twilight-6e3a73.netlify.app/signin
- SignUp: https://classy-twilight-6e3a73.netlify.app/signup
- Todo: https://classy-twilight-6e3a73.netlify.app/todo

※ 로그인 여부에 따라 리다이렉팅 됩니다.

#### 라우트 및 인증 정보 데이터 설계 다이어그램

![image](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-1-7/assets/97281800/b4cfcfd3-b451-499e-beb4-c353b9a94046)

#### 회원가입, 로그인 Form 설계 다이어그램

![image](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-1-7/assets/44149596/6d856380-9843-49d7-8f66-56050fec6ee8)

#### TodoList 컴포넌트 설계 다이어그램

![image](https://github.com/wanted-pre-onboarding-team-12th-7/pre-onboarding-12th-1-7/assets/44149596/d7d75034-20d7-4879-9c70-51cbdcdce483)

## Best Practice

### 로그인/회원가입

<!-- 인증 데이터 설계 -->

- [비동기 처리](https://www.notion.so/sonicrok/1-0fe82e20f8124d1eac79eb641d7cdcd8?pvs=4#48c233536b114a658410ab8bf959922a)

- [폼 컴포넌트 설계](https://www.notion.so/sonicrok/1-0fe82e20f8124d1eac79eb641d7cdcd8?pvs=4#08c827f61bdb4ff48b2acc2b81592299)

- [라우트 전략 - ProtectedRoute](https://www.notion.so/sonicrok/1-0fe82e20f8124d1eac79eb641d7cdcd8?pvs=4#64841342c647489699e38f6c0f184826)

- [AuthProvider를 사용해 리팩토링](https://www.notion.so/sonicrok/1-0fe82e20f8124d1eac79eb641d7cdcd8?pvs=4#36b357bd674042e39ee8be53b5c2c792)

### TODO LIST

- [TodoList 컴포넌트 설계](https://www.notion.so/sonicrok/1-0fe82e20f8124d1eac79eb641d7cdcd8?pvs=4#bd6f8469da7e4346964c71d4dc720f51)
