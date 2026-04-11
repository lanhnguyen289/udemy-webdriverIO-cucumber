# 1. Intructions and Notes

## 1.1. Init the project

1. Command to create the project
   npm init
   npm init wdio@latest .

2. Check the following in respective files
   package.json
   "type": "module"

   tsconfig.json
   "module": "ESNext",
   "resolveJsonModule": true,
   "esModuleInterop": true,
   "strict": true,

## 1.2. File & Code Naming Conventions

| Item              | Convention             | Example                                         |
| ----------------- | ---------------------- | ----------------------------------------------- |
| Folders           | Use `kebab-case`       | `page-objects`, `step-definitions`, `test-data` |
| Feature Files     | Use `PascalCase`       | `Login.feature`, `CheckoutFlow.feature`         |
| General Files     | Use `camelCase`        | `browserUtils.ts`, `testConfig.ts`              |
| Page Object files | Use `dot-separated`    | `login.page.ts`, `checkout.page.ts`             |
| Class Names       | Use `PascalCase`       | `LoginPage`, `CheckoutPage`                     |
| Variables         | Use `camelCase`        | `loginButton`, `userEmail`                      |
| Constants         | Use `UPPER_SNAKE_CASE` | `DEFAULT_TIMEOUT`, `BASE_URL`                   |

# Recommended VS Code Extensions

- Cucumber (Gherkin) Full Support Pretier code fomatter
- Path Intellisense
- npm Intellisense...
