---
title: OAuth 2.0 Basics - 5. R.S's consent step
description: OAuth 2.0 Basics - 5. R.S's consent step.
pubDate: June 27 2026
heroImage: ../../assets/OAuth R.S_s consent.jpg
---

1. R.O 의 승인이 끝났기 때문에, authorization_code: 3 을 발급한다.

2. authorization_code: 3을 https://client/callback?authorization_code=3 주소로 리다이렉션으로 R.O의 브라우저에게 보낸다.

3. R.O의 브라우저는 C의 주소인 https://client/callback?authorization_code=3 로 리다이렉트 된다. 이 때, C는 authorization_code를 받는다.

4. C는 R.S에 https://resource_server/token?grant_type=authorization_code&code=3&redirect_uri=https://client/callback&client_ide=1&client_secret=2 주소에 파라미터와 함께 접속한다.

5. R.S는 C가 보낸 authorization_code: 3과 자신의 authorization_code에 가 속한 데이터를 확인하여, 일치여부를 판단한다. 정보가 모두 일치하면 access_token 발급을 준비한다.



