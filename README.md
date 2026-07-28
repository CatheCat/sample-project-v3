# sample-project-v3

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Sentry SDK 設定
1. 在專案根目錄新增 `.env.local`：

```
VUE_APP_SENTRY_DSN=https://<YOUR_KEY>@o0.ingest.sentry.io/<PROJECT_ID>
VUE_APP_SENTRY_ENVIRONMENT=development
VUE_APP_SENTRY_TRACES_SAMPLE_RATE=1.0
```

2. 重新啟動開發伺服器：

```
npm run serve
```

3. 若要測試錯誤上報，可在程式碼中暫時加入：

```
throw new Error('Sentry test error')
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
