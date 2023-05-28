## K8S frontend

This is a frontend app build in NextJS. This App will be used in [Learn K8S](https://github.com/vimalmenon/k8s-learn) project

---
### Accepted Environmental value
| Key |  Default Value  |
|:-----|:--------:|
| NEXT_PUBLIC_APP_NAME   | None |
| NEXT_PUBLIC_NODE_NAME   |  None  |
| NEXT_PUBLIC_POD_NAME   | None |
| NEXT_PUBLIC_POD_NAMESPACE   | None |
| NEXT_PUBLIC_POD_IP   |  None  |
| NEXT_PUBLIC_API   |  None  |

---
### Pushing to Docker Hub
Build an image with the latest tag
```bash
docker build -tag vimalsmenon/app-frontend:latest .
```
Docker Login with username and password
```bash
docker login
```
Docker push
```bash
docker push vimalsmenon/app-frontend:latest
```