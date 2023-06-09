// TODO: 이 곳에 정답 코드를 작성해주세요.
// 1. 페이지가 로드 된 시점에 ID 입력 창에 Focus가 되어 있어야 합니다.
// 대상: ID 입력 input
// 이벤트: 페이지(window)가 로드 되었을 때
// 핸들러: Focus()

// 변수명 앞 $: DOM으로 가져온 변수
const $id = document.querySelector('#id');
window.addEventListener("load", () => $id.focus())
