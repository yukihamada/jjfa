export const PenaltyTypes = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h3 className="text-xl font-bold mb-4">8.6 ペナルティの種類</h3>
      <div className="space-y-4">
        <div className="bg-yellow-50 p-4 rounded-lg">
          <p className="font-semibold text-yellow-800">8.6.1 軽度の反則</p>
          <ul className="list-disc pl-5 mt-2 text-yellow-700">
            <li>警告</li>
            <li>相手にアドバンテージ</li>
          </ul>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="font-semibold text-red-800">8.6.2 重大な反則</p>
          <ul className="list-disc pl-5 mt-2 text-red-700">
            <li>ポイントの減点</li>
            <li>反則負け（失格）</li>
          </ul>
        </div>
      </div>
    </div>
  );
};