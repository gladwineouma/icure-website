import { motion } from "framer-motion";

const TestTailwind = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-10">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center"
            >
                <h1 className="text-3xl font-bold text-red-600 mb-4">
                    Tailwind is Working 🎉
                </h1>

                <p className="text-gray-600 mb-6">
                    If you see spacing, shadows, and colors,
                    Tailwind is installed correctly.
                </p>

                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition">
                    Test Button
                </button>

            </motion.div>

            <div className="bg-red-500 text-white p-10 text-3xl">
                Tailwind Test
            </div>

        </div>
    );
};

export default TestTailwind;