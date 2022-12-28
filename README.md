# 🧐 이게 뭔가요?

훌륭한 프론트엔드 개발자가 되기 위해서 하던 공부 중에서 표준 JS 명세 중 하나인 `canvas`를 사용해서 gatherTown 같은 서비스를 만들어 보는 과제를 부여받았습니다. 일반적인 2D게임처럼, 캐릭터가 움직일 때, 필요 시 카메라도 함께 움직이는 로직이 필요했습니다. 최대한 바닐라JS로 구현하려 하였기에, 관련 사항을 구글링 했었고, 좋은 자료를 찾긴 했습니다.

- [Stack overflow : HTML5 Canvas camera/viewport - how to actually do it?](https://stackoverflow.com/questions/16919601/html5-canvas-camera-viewport-how-to-actually-do-it)

문제 없이 돌아가는 좋은 자료이긴 한데, 2013년이라는 9년정도 지난 시점에 올라왔던 글이어서, JS 문법이 좀 낡았습니다. 클래스를 사용하지 않고 프로토타입 체이닝으로만 작업을 하고, `let`과 `const`가 대중화 되기 이전이라 스코프가 오염되지 않도록 IIFE로 감싸져있고... 근데 이게 구글 검색 1위를 당당히 차지하고 있었기 떄문에, 저를 위해서, 구글링 하는 여러 주니어 프론트엔드 개발자분들을 위해서, 모-던한 문법으로 개선할 필요가 있음을 느끼고, 작업에 착수하여, 모두가 읽을 수 있도록 이렇게 배포하려고 합니다.

# 📝 개선한 사항들

1. `var` -> `let` 또는 `const`
2. IIFE로 묶여있는 모듈 단위들 `class` 문법으로 개선
3. 하나의 monolithic 한 구조 -> 모듈을 파일로 분할하고 webpack으로 묶기

# 🔮 나중에 할 사항들

1. `requestAnimationFrame`등 모던 JS 문법으로 개선할 수 있는 부분들 찾아보기
2. TypeScript 도입
3. `Redux`등 상태관리 시스템 관련 고려해보기
4. 공부하면서 알게된 사항들 블로그로 정리하기
