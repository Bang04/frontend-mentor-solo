import React, { useEffect, useState } from "react";
import { TinyURL } from "./TinyURL";

type ShortItem = {
  original: string;
  short: string;
};

const UrlForm = () => {

  const [url, setUrl] = useState("");
  const [list, setList] = useState<ShortItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!url) {
      setError("Please enter a URL");
      return;

    }
    setLoading(true);
    setError("");

    try {
      const shortUrl = await TinyURL(url);
      setList((prev) => [
        {
          original: url,
          short: shortUrl,
        },
        ...prev,
      ]);

      setUrl("");
      console.log("Short URL:", shortUrl);

    } catch (error) {
      setError("An error occurred while shortening the URL");
    } finally {
      setLoading(false);
    }
  }

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 1500);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };
  return (
    <section className="relative -mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className="rounded-xl p-6 md:p-10 bg-boost-mobile md:bg-boost-desktop bg-no-repeat bg-right bg-cover">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Shorten a link here..."
              className="flex-1 px-4 py-3 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-cyan-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-cyan-600"
            >
              {loading ? "Loading..." : "Shorten It!"}
            </button>
          </form>
        </div>
      </div>

      {/* 에러 메시지 */}
      {error && <p className="text-red-300 mt-2">{error}</p>}

      {/* 결과 출력 */}
      {list.length > 0 && (
        <div className="max-w-6xl mx-auto mt-8">
          <ul className="mt-4">
            {list.map((item, index) => (
              <li className="bg-white rounded-lg p-4 flex items-center justify-between gap-4 shadow">
                {/* URL 영역 */}
                <p className="text-gray-800 truncate max-w-[70%]">
                  {truncateText(item.original, 30)}
                </p>

                {/* 오른쪽 영역 */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <p className="text-cyan-500 font-semibold">
                    {item.short}
                  </p>

                  <button
                    onClick={() => handleCopy(item.short, index)}
                    className={`px-4 py-2 rounded-md text-white text-sm font-semibold transition
        ${copiedIndex === index
                        ? "bg-purple-600"
                        : "bg-cyan-500 hover:bg-cyan-600"
                      }`}
                  >
                    {copiedIndex === index ? "Copied!" : "Copy"}
                  </button>
                </div>
              </li>

            ))}
          </ul>
        </div>
      )}


    </section>
  )
}

export default UrlForm;