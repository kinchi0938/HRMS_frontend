# HR Management System (HRMS)

기존의 Create React App 기반 인사 관리 시스템을 Next.js 기반으로 마이그레이션하여 성능과 개발자 경험을 크게 개선했습니다.

## 🔄 마이그레이션 내용

### 이전 스택
- Create React App
- React 18
- React Router DOM
- TypeScript
- Tailwind CSS
- Express.js
- MongoDB

### 현재 스택
- Next.js 1
- App Router
- React Query
- Redux Toolkit 
- TypeScript
- Tailwind CSS
- Express.js
- MongoDB

## 🚀 주요 개선사항 및 측정 방법

### 성능 개선
| 개선 영역 | 변경 전 | 변경 후 | 개선율 | 측정 방법 |
|---------|--------|--------|--------|----------|
| 초기 페이지 로딩 시간 | 2.305초 | 0.888초 | 61.5% | Lighthouse와 Chrome DevTools Performance 탭 (FCP) |
| Largest Contentful Paint(LCP) | 3.8초 | 0.8초 | 78.95% | Lighthouse LCP 메트릭 |
| 메모리 사용량 | 평균 5.6MB | 평균 4.2MB | 25.00% | Chrome DevTools Memory 힙 스냅샷 |
| 메인 컴포넌트 리렌더링 | 3.1회/action | 1.2회/action | 61.29% | React DevTools Profiler |

### 코드 개선사항

1. **SSR 도입**
```typescript
// pages/employees/[id].tsx
export async function getServerSideProps(context) {
  const { id } = context.params;
  const employee = await fetchEmployee(id);
  
  return {
    props: {
      employee
    }
  }
}
```

2. **React Query를 통한 데이터 관리**
```typescript
// hooks/useEmployees.ts
export function useEmployees() {
  return useQuery({
    queryKey: ['employees'],
    queryFn: fetchEmployees,
    staleTime: 60 * 1000, // 1분간 캐시
  })
}
```

3. **Redux Toolkit으로 상태관리 개선**
```typescript
// store/employeeSlice.ts
const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload
    }
  }
})
```

## 📁 프로젝트 구조
```
src/
├── app/                 # Next.js 15 app directory
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 메인 페이지
│   └── employees/      # 직원 관련 라우트
├── components/         
│   ├── common/         # 공통 컴포넌트
│   └── employees/      # 직원 관련 컴포넌트
├── hooks/              # 커스텀 훅
├── services/          # API 서비스
├── store/             # Redux store
└── types/             # TypeScript 타입 정의
```

## ⚙️ 환경 설정

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm start
```

## 🔑 환경 변수
```env
NEXT_PUBLIC_API_URL=api_url
MONGODB_URI=mongodb_uri
JWT_SECRET=jwt_secret
```
