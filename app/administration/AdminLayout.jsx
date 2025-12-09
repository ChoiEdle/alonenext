import { Link, Outlet } from "react-router-dom";
import "./AdminLayout.scss";

export default function AdminLayout() {
  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <h2 className="admin-title">관리자 메뉴</h2>

        <nav className="admin-nav">
          <Link href="/admin/analytics/forecast">📈 판매 예측</Link>
          <Link href="/admin/analytics/conversion">📊 전환율 분석</Link>
          <Link href="/admin/analytics/price">상품 가격 분석</Link>
          <Link href="/admin/products/reviewList">리뷰 분석</Link>
          <Link href="/admin/products/add">상품 등록</Link>
          <Link href="/admin/adminProductList">상품 편집</Link>
        </nav>
      </aside>

      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
}
