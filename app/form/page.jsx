const FormPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4 text-red-600">بیجک</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="مثلا ۵۰ سانتی‌متر"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="مثلا ۲۵ سانتی‌متر"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="مثلا ۲۰ سانتی‌متر"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="number"
            placeholder="مثلا ۱۰ کیلوگرم"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="text"
            placeholder="مثلا ۲,۵۰۰,۰۰۰"
            className="w-full border px-4 py-2 rounded"
          />
          <button className="w-full bg-red-500 text-white px-4 py-2 rounded">
            محاسبه قیمت
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
