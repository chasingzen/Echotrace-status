import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from 'lucide-react';

const statusData = [
  { label: 'Project Initialized', value: 100 },
  { label: 'Animated Logo Integrated', value: 100 },
  { label: 'Audio Upload Feature', value: 80 },
  { label: 'Status Page Enhancements', value: 60 },
  { label: 'AI Analysis Backend', value: 20 },
];

const activityLog = [
  { date: '2025-04-02', activity: 'Domain echo-trace.com connected to Vercel' },
  { date: '2025-04-03', activity: 'Unified audit log reporting script completed' },
  { date: '2025-04-04', activity: 'Demo site and status page rebuilt from scratch' },
];

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-gray-900 text-white font-sans px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold tracking-tight text-cyan-400 drop-shadow-lg mb-4">
          EchoTrace Project Status
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Real-time progress and activity log for the EchoTrace platform. Futuristic AI, now in development.
        </p>
      </motion.div>

      <div className="grid gap-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 bg-opacity-60 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-cyan-500/20 transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-4">Progress</h2>
          <div className="space-y-4">
            {statusData.map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-300 font-medium">{item.label}</span>
                  <span className="text-sm text-gray-400">{item.value}%</span>
                </div>
                <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-700"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800 bg-opacity-60 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-purple-500/20 transition-shadow"
        >
          <h2 className="text-2xl font-semibold mb-4">Activity Log</h2>
          <ul className="space-y-4">
            {activityLog.map((log, idx) => (
              <li key={idx} className="flex items-center gap-4 text-gray-300">
                <CheckCircleIcon className="text-green-400 w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-medium">{log.activity}</p>
                  <p className="text-sm text-gray-500">{log.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center mt-20 text-sm text-gray-600"
      >
        Designed in the spirit of Blade Runner 2049 • EchoTrace © 2025 Jimmy Starling
      </motion.footer>
    </div>
  );
}
