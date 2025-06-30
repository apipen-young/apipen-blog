---
title: JWT Basics - 1. What is JWT?
description: JWT Basics - 1. What is JWT?
pubDate: June 27 2025
heroImage: ../../assets/jwt-ticket.jpg
---
JWT는 JSON Web Token의 약자로, JSON의 형태를 한 디지털 토큰입니다. JWT는 **인증된 사용자 정보가 담긴 디지털 입장권**과 같은 역할을 합니다.

사용자가 로그인하여 본인임을 증명하면 서버에서 JWT를 발급해줍니다. 이후 사용자는 매번 ID와 비밀번호를 입력하는 대신, 이 JWT만 서버에 제시하면 간편하게 본인 인증을 완료할 수 있습니다.

마치 놀이공원 입장권처럼, 한 번 발급받으면 재입장할 때마다 다시 티켓을 구매할 필요 없이 입장권만 보여주면 되는 것과 같은 원리입니다.

아래 간단한 예시를 보겠습니다. 
![login jwt](../../assets/login-jwt.jpg)
위 로그인을 통하여 JWT 토큰을 받아왔습니다.

이하는 토큰의 번호입니다.
`eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhYmNAZ29vZ2xlLmNvbSIsImlhdCI6MTc1MDkzMzQyMywiZXhwIjoxNzUxNTM4MjIzLCJyb2xlIjoidXNlciJ9.CIs9UWbglx9X9M2UK5KXDrWRQmQS9NAe43J-1WkjUKa8gySTLOPXhGLIJruY8eN1m1wsBeN0XjbwKvt5gsni5Q2Jy-cP2D7G2fHMhUI73CyYpTnyaTJ3ewD4u9GUXOCwCRjpbfyueMHndlRLCF5Buu_ePs-TEQhJ6rfhb7jYtZ3hifZRBBLW91KxXey26V4ccVYilmW1mv5Q_Hlm9wUcxTNj_OYw7KsVFPxxtCukpKCE0p4t88fAyVOq6-sKlHzzr_W92f1TTZLM-Pw7NJPAp6Q9cAEw2cwxecPCBCw0uqHwd1DZrVLXWBzW_EMhfxRblwUHUYPEflhDgX2xKnT19A"`

이 토큰은 웹 애플리케이션에서 인증이 필요한 페이지(예: 사용자의 민감한 정보가 포함된 대시보드 페이지)에 접근할 때, ID와 비밀번호를 매번 입력하는 대신 사용됩니다.
![use jwt](../../assets/use-jwt.jpg)

정리하자면, 
JWT는 **인증된 사용자의 정보를 담은 전자 입장권이다.** 라고 볼 수 있습니다.

![jwt ticket](../../assets/jwt-ticket.jpg)
