export default function Footer({ content }) {
  return (
    <footer className="py-8 px-4 sm:px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-600 mb-4">
          {content.footer.copyright}
        </p>
        <div className="flex justify-center gap-4 text-sm">
          <a
            href="mailto:zhengyuqingsherry@gmail.com"
            className="text-purple hover:underline focus:outline-none focus:ring-2 focus:ring-purple"
          >
            {content.contact.email}
          </a>
          <a
            href="https://github.com/yummyooyummy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple hover:underline focus:outline-none focus:ring-2 focus:ring-purple"
          >
            {content.contact.github}
          </a>
          <a
            href="https://www.linkedin.com/in/yuqing-zheng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple hover:underline focus:outline-none focus:ring-2 focus:ring-purple"
          >
            {content.contact.linkedin}
          </a>
        </div>
      </div>
    </footer>
  );
}
