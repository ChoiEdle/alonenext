"use client"
import React from "react";
import Link from "next/link";
import { LuCandy } from "react-icons/lu";
// features
import "./TopBar.scss";
import { api } from "@/shared/lib/axios";
import useAuthStore from "@/features/auth/authStore";

export default function TopBar() {
  const loginInfo = JSON.parse(localStorage.getItem("loginInfo"));
  // const isLogin  = useSelector((state) => state.auth.isLogin);
  const isLogin = useAuthStore((s) => s.isLogin);
  const isAdmin = loginInfo?.role === "ADMIN";

  const handleLogout = async () => {
    try {
        await api.post("/auth/logout",{});
        localStorage.removeItem("loginInfo");
        window.location.href = "/";
      } catch (err) {
      }
  };

  return (
    <div className="top-bar">
      <div className="top-bar__left">
        <Link href="/" className="logo"><LuCandy />Candy</Link>
      </div>

      <div className="top-bar__right">
        <ul className="top-bar__menu">
          <li><Link href="/support">고객센터</Link></li>
          <li><Link href="/notice">공지사항</Link></li>

          {/* 회원가입 */}
          {!isLogin && <li><Link href="/signup">회원가입</Link></li>}
          {/* 로그인 / 로그아웃 */}
          {!isLogin && <li><Link href="/login">로그인</Link></li>}
          {isLogin && <li onClick={handleLogout}>로그아웃</li>}
          {/* 마이페이지 */}
          {isLogin && <li><Link href="/mypage">마이페이지</Link></li>}
          {/* 관리자페이지 */}
          {isLogin && isAdmin && <li><Link href="/admin">관리자페이지</Link></li>}
        </ul>
      </div>
    </div>
  );
}

