# 前端脚手架项目

一个基于 React + TypeScript + Vite 的现代化前端脚手架，包含完整的项目结构、配置和工具链。

## 技术栈

- **框架**: React 19.1.1
- **语言**: TypeScript
- **构建工具**: Vite
- **UI 组件库**: Ant Design 5.28.0
- **状态管理**: Redux Toolkit + Redux Persist
- **路由**: React Router DOM 7.9.5
- **HTTP 请求**: Axios
- **样式**: Tailwind CSS
- **国际化**: i18next
- **本地存储**: IndexedDB (idb)

## 功能特性

- ✅ **完整的项目结构**
- ✅ **TypeScript 类型安全**
- ✅ **Redux Toolkit 状态管理**
- ✅ **Redux Persist 状态持久化**
- ✅ **Axios 请求拦截器与错误处理**
- ✅ **多环境配置**
- ✅ **请求缓存策略**
- ✅ **全局错误处理与错误边界**
- ✅ **主题切换**
- ✅ **国际化支持**
- ✅ **ESLint 代码规范**
- ✅ **响应式设计**

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境

```bash
npm run dev
```

### 构建生产环境

```bash
npm run build
```

### 构建开发环境

```bash
npm run build:dev
```

### 预览构建结果

```bash
npm run preview
```

### 运行代码检查

```bash
npm run lint
```

### 运行代码检查并修复

```bash
npm run lint:fix
```

## 项目结构

```
├── src/
│   ├── components/          # 通用组件
│   │   └── ui/             # UI 组件
│   ├── hooks/              # 自定义 hooks
│   ├── pages/              # 页面组件
│   ├── routes/             # 路由配置
│   ├── service/            # 服务层
│   ├── store/              # Redux store
│   ├── types/              # TypeScript 类型定义
│   ├── utils/              # 工具函数
│   ├── App.tsx             # 应用入口组件
│   └── main.tsx            # 应用入口文件
├── public/                 # 静态资源
├── .env                    # 基础环境变量
├── .env.development        # 开发环境变量
├── .env.production         # 生产环境变量
├── eslint.config.js        # ESLint 配置
├── vite.config.ts          # Vite 配置
└── tsconfig.json           # TypeScript 配置
```

## 环境配置

### 环境变量

项目支持多环境配置，通过以下文件定义：

- `.env`: 基础环境变量
- `.env.development`: 开发环境变量
- `.env.production`: 生产环境变量

### 主要环境变量

| 变量名 | 描述 | 默认值 |
|-------|------|--------|
| VITE_API_BASE_URL | API 基础 URL | /api |
| VITE_API_CIRCUIT_URL | 电路 API URL | /circuit |
| VITE_ENV | 环境类型 | development |
| VITE_APP_TITLE | 应用标题 | 前端脚手架 |
| VITE_DEBUG | 是否开启调试模式 | true |

## 开发流程

### 代码规范

项目使用 ESLint 进行代码规范检查，遵循 TypeScript ESLint 推荐规则、严格规则和风格规则。

### 组件开发

1. 在 `src/components` 目录下创建组件
2. 使用 TypeScript 定义组件类型
3. 遵循 React Hooks 规范
4. 添加必要的注释

### API 请求

使用 `src/utils/useAppRequest.ts` 进行 API 请求：

```typescript
import useAppRequest from '@/utils/useAppRequest';

// GET 请求（带缓存）
const response = await useAppRequest.onGet('/api/users', {
  params: { page: 1 },
  cache: true, // 启用缓存
  cacheTime: 1000 * 60 * 10, // 缓存 10 分钟
});

// POST 请求
const response = await useAppRequest.onPost('/api/users', {
  name: 'John Doe',
  email: 'john@example.com',
});
```

## 构建部署

### Docker 部署

1. 构建 Docker 镜像

```bash
# 假设已配置 Dockerfile
# docker build -t mechvision-proj .
```

2. 运行 Docker 容器

```bash
docker run -d --name mechvision-proj -p 10000:80 --restart unless-stopped mechvision-proj
```

### GitHub Actions

项目配置了 GitHub Actions 自动构建流程，每次推送代码会自动构建并推送镜像到指定仓库。

## 注意事项

1. 所有 API 请求必须使用 `useAppRequest` 工具
2. 组件命名使用 PascalCase
3. 函数命名使用 camelCase
4. 常量命名使用 UPPER_SNAKE_CASE
5. 遵循 TypeScript 类型安全原则，避免使用 `any`
6. 页面组件使用懒加载
7. 添加适当的错误处理
8. 对于频繁请求的数据，考虑使用缓存

## 许可证

MIT

