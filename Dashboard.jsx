function Dashboard() {
  return (
    <div className="max-w-5xl mx-auto text-white">

      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-300">
        WelfareSync Dashboard
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="p-6 rounded-xl bg-indigo-600 shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3">🎯 Project Mission</h3>
          <p>
            WelfareSync simplifies access to government welfare schemes,
            especially for women and rural communities.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-purple-600 shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3">🚀 Innovation</h3>
          <p>
            Smart eligibility detection based on age, income,
            gender, category, and maternity status.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-pink-600 shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3">👩 Women-Centric Design</h3>
          <p>
            Special focus on maternity assistance, skill training,
            and women entrepreneurship programs.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-emerald-600 shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3">🔮 Future Scope</h3>
          <p>
            AI chatbot support, document upload,
            Aadhaar linking, and multilingual access.
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;