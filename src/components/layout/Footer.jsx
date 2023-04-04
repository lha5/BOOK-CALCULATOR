function Footer() {
  return (
    <footer className="absolute flex items-center justify-center bottom-1 left-0 right-0 h-8 text-sm md:text-base bg-transparent">
      ©{' '}
      <a
        href="https://cafe.naver.com/bookcns"
        target="_blank"
        rel="noreferrer"
        className="font-semibold mr-1"
      >
        풍요로운 책세상
      </a>
      . All Rights Reserved. &{' '}
      <a
        href="https://github.com/lha5/BOOK-CALCULATOR"
        target="_blank"
        rel="noreferrer"
        className="font-medium mx-1"
      >
        HA LEE
      </a>{' '}
      presents.
    </footer>
  );
}

export default Footer;
