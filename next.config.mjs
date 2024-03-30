import path from "path";
import { fileURLToPath } from "url";

// 現在のファイルのフルパスを取得
const __filename = fileURLToPath(import.meta.url);
// __filename からディレクトリパス (__dirname の代わり) を取得
const __dirname = path.dirname(__filename);

const nextConfig = {
  webpack: (config) => {
    // '@/src' へのエイリアスを設定
    config.resolve.alias["@"] = path.join(__dirname, "src");
    return config;
  },
};

export default nextConfig;
