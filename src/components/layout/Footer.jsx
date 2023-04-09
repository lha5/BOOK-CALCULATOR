function Footer() {
  return (
    <footer className="absolute flex flex-col md:flex-row items-center justify-center bottom-0 left-0 right-0 h-8 text-sm md:text-base bg-transparent pb-4 md:pb-2 text-slate-500">
      <span>
        ©{' '}
        <a
          href="https://cafe.naver.com/bookcns"
          target="_blank"
          rel="noreferrer"
          className="mr-1 hover:text-slate-900 hover:font-semibold"
        >
          풍요로운 책세상.
        </a>
        All Rights Reserved.
      </span>
      <span>
        {' '}
        &{' '}
        <a
          href="https://github.com/lha5/BOOK-CALCULATOR"
          target="_blank"
          rel="noreferrer"
          className="mx-1 hover:text-slate-900 hover:font-medium"
        >
          HA LEE
        </a>{' '}
        presents.
      </span>
    </footer>
  );
}

export default Footer;
