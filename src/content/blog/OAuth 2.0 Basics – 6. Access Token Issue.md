---
title: OAuth 2.0 Basics – 6. Access Token Issue
description: OAuth 2.0 Basics – 6. Access Token Issue.
pubDate: June 27 2026
heroImage: ../../assets/OAuth Access Token Issue.jpg
---

1. R.S의 승인이 끝나고 access_token을 발급하기 전에, 코드가 재사용되서 제 3자가 토큰을 무단으로 발급받는것을 방지하기위해 먼저 C와 R.S가 가지고 있는 authorization_code: 3을 지운다. 

2. R.S는 C에게 access_token을 발급한다.

3. C는 access_token을 사용하여 R.S의 기능 b, c를 사용할 수 있다. 

