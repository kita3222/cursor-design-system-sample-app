import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-secondary-50 py-8 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-4">Dance</h3>
            <p className="text-secondary-600 text-sm">
              パフォーマンス特化型チケット販売プラットフォーム
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-secondary-900 mb-4">会社情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-secondary-600 hover:text-primary-600 text-sm transition-colors">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/company/news" className="text-secondary-600 hover:text-primary-600 text-sm transition-colors">
                  ニュース
                </Link>
              </li>
              <li>
                <Link href="/company/careers" className="text-secondary-600 hover:text-primary-600 text-sm transition-colors">
                  採用情報
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-secondary-900 mb-4">サポート</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/help" className="text-secondary-600 hover:text-primary-600 text-sm transition-colors">
                  ヘルプセンター
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-secondary-600 hover:text-primary-600 text-sm transition-colors">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-secondary-600 hover:text-primary-600 text-sm transition-colors">
                  よくある質問
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium text-secondary-900 mb-4">法的情報</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-secondary-600 hover:text-primary-600 text-sm transition-colors">
                  利用規約
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-secondary-600 hover:text-primary-600 text-sm transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="/legal/transactions" className="text-secondary-600 hover:text-primary-600 text-sm transition-colors">
                  特定商取引法に基づく表記
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-600 text-xs">
              © {new Date().getFullYear()} Dance All Rights Reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-primary-600">
                Twitter
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-secondary-600 hover:text-primary-600">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 