
export default class Pagination2 {
  constructor(content, pagination, items) {
    this.content = document.getElementById(content),
    this.pagination = document.getElementById(pagination),
    this.items = items,                        // 페이지네이션될 항목 배열

    this.BTN_NUM = 5,                       // 페이지당 보여질 페이지네이션 버튼 수
    this.ITEM_NUM = 10,                     // 페이지당 항목 수
    this.currentPage = 1                    // 현재 페이지 번호

    this.displayItems();
    this.createPaginationButtons();
    document.querySelectorAll('.page-btn')[0].setAttribute("style", "background-color: #8976FD; color:white;");
  }

  displayItems() {
    const startIndex = (this.currentPage - 1) * this.ITEM_NUM;
    const endIndex = startIndex + this.ITEM_NUM;
    const displayedItems = this.items.slice(startIndex, endIndex);

    this.content.innerHTML = displayedItems.join('');

    const heartIcons = document.querySelectorAll(".heart_icon");
    // const playArrowIcons = document.querySelectorAll(".play_arrow_icon");

    heartIcons.forEach(heartIcon => {
      heartIcon.addEventListener("click", this.likeIt);
    });
  }

  likeIt() {
    // console.log(this.dataset.flag);
    // console.log(this.textContent);

    if(Number(this.dataset.flag) == 0) {
      this.textContent = "favorite";
      this.dataset.flag = 1;
    }
    else {
      this.textContent = "favorite_border";
      this.dataset.flag = 0;
    }
  }

  createPaginationButtons() {
    let nextBtn = null;
    let prevBtn = null;

    const numPages = Math.ceil(this.items.length / this.ITEM_NUM);
    let currentBtnGroup = Math.ceil(this.currentPage / this.BTN_NUM);
    let startGroupIdx = (currentBtnGroup - 1) * this.BTN_NUM + 1;
    let endGroupIdx = currentBtnGroup * this.BTN_NUM;

    if(endGroupIdx >= numPages) {
      endGroupIdx = numPages;
    }
    else {
      // 다음 버튼 생성(페이지 그룹이 하나밖에 없을 때, 마지막 페이지 그룹일 때 다음 버튼 X)
      nextBtn = document.createElement("button");
      nextBtn.className = "next-btn";
      nextBtn.textContent = "다음";

      // 다음 버튼에 이벤트 추가
      nextBtn.addEventListener("click", () => {
        this.currentPage = startGroupIdx + this.BTN_NUM;
        this.displayItems();
        this.createPaginationButtons();
        document.querySelectorAll('.page-btn')[0].setAttribute("style", "background-color: #8976FD; color:white;");
      });
    }

    // 이전 버튼 생성(페이지그룹이 1이 아니라면 이전 버튼 필요)
    if(currentBtnGroup > 1) {
      prevBtn = document.createElement("button");
      prevBtn.textContent = "이전";
      prevBtn.className = "prev-btn";

      // 이전 버튼에 이벤트 추가
      prevBtn.addEventListener("click", () => {
        this.currentPage = startGroupIdx - this.BTN_NUM;
        this.displayItems();
        this.createPaginationButtons();
        document.querySelectorAll('.page-btn')[0].setAttribute("style", "background-color: #8976FD; color:white;");
      });
    }

    let buttonsHtml = '';
    for (let i = startGroupIdx; i <= endGroupIdx; i++) buttonsHtml += `<div class="page-btn">${i}</div>`;
    this.pagination.innerHTML = buttonsHtml;

    if(prevBtn) {
      this.pagination.insertBefore(prevBtn, this.pagination.firstChild);
    }
    if(nextBtn) {
      this.pagination.appendChild(nextBtn);
    }

    // 버튼 활성화시키고 아이템 다시 뿌려야.
    let pageBtns = document.querySelectorAll('.page-btn');
    pageBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.currentPage = btn.textContent;
        this.displayItems();

        // 나머지 버튼 비활성화
        pageBtns.forEach((btn) => btn.setAttribute("style", "background-color: white; color: #332C5C;") );

        // 버튼 활성화(색상변경)
        btn.setAttribute("style", "background-color: #8976FD; color:white;");
      });
    });
  }
}