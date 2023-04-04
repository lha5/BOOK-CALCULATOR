function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 text-center py-4 text-sm md:text-base bg-transparent">
      ©{' '}
      <a
        href="https://cafe.naver.com/bookcns"
        target="_blank"
        rel="noreferrer"
        className="font-semibold"
      >
        풍요로운 책세상
      </a>
      . All Rights Reserved. &{' '}
      <a
        href="https://github.com/lha5/BOOK-CALCULATOR"
        target="_blank"
        rel="noreferrer"
        className="font-medium"
      >
        HA LEE
      </a>{' '}
      presents.
    </footer>
  );
}

export default Footer;
