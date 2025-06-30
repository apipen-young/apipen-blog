---
title: OAuth 2.0 Basics – 1. Introduction
description: Learning about OAuth 2.0 basics
pubDate: June 25 2025
heroImage: ../../assets/oauth2-logo.png
---
현재 수많은 고품질 웹 애플리케이션이 존재하는 시대에서 OAuth를 통한 다른 웹 애플리케이션 연동은 거의 필수적인 요소가 되었습니다. 따라서 OAuth를 활용하는 개발자와 정보보안 담당자들에게는 OAuth에 대한 심도 있는 이해가 매우 중요해졌습니다.

하지만 OAuth는 다소 높은 학습 곡선을 가지고 있습니다. 인증 과정에 참여하는 여러 주체들과 이들 간의 복잡한 상호작용 흐름, 그리고 이 과정에서 발생할 수 있는 다양한 보안 취약점들이 존재하기 때문입니다. 또한 JWT, OpenID Connect(OIDC), PKCE와 같은 다른 표준들과 함께 사용되는 경우가 많아, OAuth를 올바르게 개발하고 운영하는 것은 결코 쉬운 일이 아닙니다.

OAuth를 제대로 이해하기 위해서는 먼저 OAuth 인증 흐름에 참여하는 각 주체들이 어떤 방식으로 인증 데이터를 주고받는지를 파악해야 합니다.
