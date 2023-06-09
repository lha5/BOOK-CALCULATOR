# 풍요책 계산기

책 제본소 <a href="https://cafe.naver.com/bookcns" rel="noreferrer" target="_blank">풍요로운 책세상</a>에서 사용하는 각종 계산기를 한글 프로그램 없이 간단하게 사용할 수 있는 웹 페이지 입니다.

---

## 사용 기술

`JavaScript` `React` `TailwindCSS`
<br>

## 기능 소개

### 1. 책등 계산

- 무선제본 가형, 나형에 필요한 책등을 계산하는 페이지 입니다.
- 종이 종류에 따라 각각의 페이지 수를 입력하고 focus를 헤제 시키면, 책등 너비가 자동으로 계산이 됩니다.
- 페이지 수는 짝수만 허용되며, 홀수를 입력하면 focus를 잃는 순간 입력한 수에서 1이 더해진 값으로 계산이 됩니다.

### 2. 견적 계산

- 제본 형식(무선제본, 중철제본), 출력할 색상, 수량(무선제본에 한함), 페이지 수 및 옵션에 따라 견적을 내볼 수 있는 페이지 입니다.
- 무선제본에서 사용되는 부분 컬러와 박 옵션은 준비중에 있습니다.
  <br>

## 구현 과정 중 생긴 문제점 및 고민 거리

1. 책등 계산기에서, 페이지를 입력한 뒤 어떤 타이밍에서 계산이 되게끔 할 지 고민이 있었습니다. onChange에서는, 홀수를 입력했을 때 짝수를 바꾸는 로직을 동시에 처리하기 어려웠습니다. 임시 방편으로 onBlur가 호출될 때 계산되도록 처리했지만, UX 관점에서 불편할 것 같다는 생각을 했습니다.
2. UI를 그리는 로직과 계산하는 로직의 분리 역시 어떤 기준으로 해야할 지 고민을 했습니다. 되도록 계산을 수행하는 코드는 각 페이지 Index.jsx 파일에 모아두고, component에는 렌더링에 필요한 데이터만 props로 넘기도록 했습니다.
