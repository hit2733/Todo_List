function Footer() {
  const githubLink = "https://github.com/hit2733";
  const linkdinLink = "https://www.linkedin.com/in/hiitesh-jindam-20ba62187/";

  return (
    <div className="w-screen h-10 bg-[#333333] fixed left-0 bottom-0">
      <div className="text-[#ffff] flex justify-between items-center h-full px-4">
        <div>Made by Hitesh &copy; 2023</div>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src="/git.png"
            alt="GitHub"
            style={{ width: "30px", height: "30px", marginRight: "8px" }}
            className="hover:filter hover:brightness-110"
          />
          <a
            href={linkdinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <img
              src="/linkdin.png"
              alt="GitHub"
              style={{
                width: "33px",
                height: "33px",
                marginRight: "10px",
                // margintop: "4px",
              }}
              className="hover:filter hover:brightness-150 mt-[5px]"
            />
          </a>
        </a>
      </div>
    </div>
  );
}

export default Footer;
