---
title: OAuth 2.0 Basics – 2. Roles
description: OAuth 2.0 Basics – 2. Roles.
pubDate: June 26 2026
heroImage: ../../assets/oauth2-roles.jpg
---

우리가 일정관리 웹 애플리케이션(**Xscheduler**)을 개발하는 팀이라고 가정해봅시다. 이 애플리케이션은 사용자가 입력한 일정을 자동으로 구글 캘린더에 추가하는 핵심 기능을 제공합니다. **Xscheduler**가 사용자의 구글 캘린더에 지속적으로 일정을 추가하려면 OAuth 인증을 통해 적절한 권한을 획득해야 합니다.

OAuth 인증 과정에는 세 가지 주요 주체가 관여합니다: 사용자(User), 웹 애플리케이션(**Xscheduler**), 그리고 구글입니다. OAuth에서는 이들을 각각 다른 용어로 지칭합니다.

먼저 사용자는 **Resource Owner**라고 불립니다. 이는 웹 애플리케이션이 접근하려는 리소스(구글의 캘린더)의 실제 소유자가 사용자이기 때문입니다. 구글은 **Resource Server**라고 불리는데, 이는 해당 리소스를 실제로 저장하고 관리하는 서버이기 때문입니다.

마지막으로 웹 애플리케이션(**Xscheduler**)은 해당 리소스를 사용하는 고객이기 때문에(실제로 사용하는 것은 사용자가 아니라, 웹 애플리케이션 입니다) **Client**라고 부릅니다.

따라서

- 사용자 – **Resource Owner**(**R.O**)

- 웹 애플리케이션 – **Client**(**C**)

- 구글 서버 – **Resource Server**(**R.S**)

의 세가지의 주체가 있습니다.

OAuth에서 이 각 주체는 **role**(**역할**)이라고 부릅니다.

(실제로 OAuth 인증에 관여하는 주체는 **Authorization Server**를 포함하여 4개입니다. Authorization Server는 OAuth 인증 과정에서 **인증과 권한 부여를 담당하는 서버**입니다. 많은 경우 Authorization Server와 Resource Server가 같은 회사에서 운영되거나 통합되어 있어서 하나로 묶어서 설명하는 경우가 많습니다. 구글도 마찬가지로 두 서버 모두 구글에서 운영하므로, 편의상 “구글”이라고 통칭하여 설명하는 것입니다.)



