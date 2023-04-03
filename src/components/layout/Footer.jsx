import naverCafeIcon from 'assets/images/naver-cafe.png';
import githubIcon from 'assets/images/github-mark.png';

function Footer() {
  return (
    <footer className="text-center">
      <p>© 풍요로운 책세상. All Rights Reserved. & lha presents.</p>
      <div className="flex felx-row items-center justify-center mt-2">
        <a href="https://cafe.naver.com/bookcns" target="_blank" rel="noreferrer">
          <img src={naverCafeIcon} width={36} alt="Naver Cafe" className="mr-2" />
        </a>
        <a href="https://github.com/lha5/BOOK-CALCULATOR" target="_blank" rel="noreferrer">
          <img src={githubIcon} width={36} alt="GitHub" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
