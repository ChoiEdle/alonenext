// features/review/components/ReviewSearch.jsx
export default function ReviewSearch({ search, setSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="상품명을 검색하세요…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
