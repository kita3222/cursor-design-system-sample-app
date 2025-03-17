import Link from 'next/link';
import { Button } from '../ui/Button';
import Image from 'next/image';

interface HeaderProps {
  isLoggedIn?: boolean;
}

export const Header = ({ isLoggedIn = false }: HeaderProps) => {
  return (
    <header className="border-b border-secondary-200 py-4 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-semibold text-primary-700">Dance</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/events" className="text-secondary-700 hover:text-primary-600 transition-colors">
            イベント
          </Link>
          <Link href="/about" className="text-secondary-700 hover:text-primary-600 transition-colors">
            サービス紹介
          </Link>
          <Link href="/contact" className="text-secondary-700 hover:text-primary-600 transition-colors">
            お問い合わせ
          </Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          {isLoggedIn ? (
            <Button variant="outline" size="sm">
              マイページ
            </Button>
          ) : (
            <>
              <Link href="/login">
                <Button variant="outline" size="sm">
                  ログイン
                </Button>
              </Link>
              <Link href="/signup">
                <Button variant="primary" size="sm">
                  新規登録
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 