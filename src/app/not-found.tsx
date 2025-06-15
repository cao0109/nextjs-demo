"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 动画背景 */}
      <div className="stars"></div>
      <div className="twinkling"></div>
      <div className="clouds"></div>

      {/* 主要内容 */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-9xl font-bold text-white text-shadow-lg">
              404
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-white mb-4 text-shadow-md">
              页面未找到
            </h2>
            <p className="text-gray-200 mb-8 max-w-md mx-auto">
              抱歉，您请求的页面似乎已经迷路了。不用担心，让我们带您回到首页。
            </p>

            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              返回首页
            </Link>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes move-background {
          from {
            transform: translate3d(0px, 0px, 0px);
          }
          to {
            transform: translate3d(1000px, 0px, 0px);
          }
        }

        @keyframes twinkle {
          from {
            background-position: 0 0;
          }
          to {
            background-position: -10000px 5000px;
          }
        }

        .stars {
          background: #000
            url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/stars.png)
            repeat;
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 0;
        }

        .twinkling {
          width: 10000px;
          height: 100%;
          background: transparent
            url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/twinkling.png)
            repeat;
          background-size: 1000px 1000px;
          position: fixed;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: 1;
          animation: twinkle 50s linear infinite;
        }

        .clouds {
          width: 10000px;
          height: 100%;
          background: transparent
            url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/clouds_repeat.png)
            repeat;
          background-size: 1000px 1000px;
          position: fixed;
          right: 0;
          top: 0;
          bottom: 0;
          z-index: 2;
          opacity: 0.4;
          animation: move-background 150s linear infinite;
        }

        .text-shadow-lg {
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
        }

        .text-shadow-md {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}
