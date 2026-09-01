import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LogIn, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  UserCheck
} from 'lucide-react';
import { PageType, UserAccount } from '../types';
import portraitImg from '../assets/images/irfan_green_portrait_1787860891859.jpg';

interface SignInPageProps {
  darkMode: boolean;
  onNavigate: (page: PageType) => void;
  onLoginSuccess: (user: UserAccount) => void;
}

export const SignInPage: React.FC<SignInPageProps> = ({ darkMode, onNavigate, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const user: UserAccount = {
        name: email.split('@')[0] || 'Client Guest',
        email: email,
        isLoggedIn: true
      };
      onLoginSuccess(user);
      onNavigate('home');
    }, 1000);
  };

  const handleDemoLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const user: UserAccount = {
        name: 'Alex Developer',
        email: 'alex.guest@portfolio.dev',
        isLoggedIn: true
      };
      onLoginSuccess(user);
      onNavigate('home');
    }, 600);
  };

  return (
    <div id="signin-page" className="relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Outer Glow Wrapper */}
        <div className="relative group rounded-3xl p-[2px]">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-35 blur-lg group-hover:opacity-60 transition duration-500" />

          {/* Glassmorphic Login Card */}
          <div className={`relative rounded-[22px] p-8 sm:p-10 backdrop-blur-2xl border ${
            darkMode 
              ? 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-2xl' 
              : 'bg-white/95 border-slate-200 text-slate-900 shadow-2xl'
          }`}>
            
            {/* Header */}
            <div className="text-center space-y-2 mb-8">
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-400 p-[2px] mx-auto mb-3 shadow-lg shadow-indigo-500/20">
                <img
                  src={portraitImg}
                  alt="Irfan Ullah"
                  className="w-full h-full rounded-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping opacity-75" />
                </span>
              </div>

              <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono mb-1">
                Irfan Ullah Portfolio
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Welcome Back
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Sign in to access personalized features &amp; project updates.
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider font-mono text-slate-400">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full pl-11 pr-4 py-3 rounded-2xl border text-sm focus:outline-none transition-all ${
                      darkMode 
                        ? 'bg-slate-900/80 border-slate-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                    }`}
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider font-mono text-slate-400">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full pl-11 pr-11 py-3 rounded-2xl border text-sm focus:outline-none transition-all ${
                      darkMode 
                        ? 'bg-slate-900/80 border-slate-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 cursor-pointer"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-700 bg-slate-800"
                  />
                  <span className="text-slate-400">Remember Me</span>
                </label>
                <button
                  type="button"
                  onClick={() => alert('Password reset simulation: A temporary reset link has been dispatched to your email.')}
                  className="text-indigo-400 hover:text-indigo-300 font-semibold cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Glowing Gradient Sign In Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full relative group py-3.5 rounded-2xl text-sm font-bold text-white overflow-hidden transition-all duration-300 focus:outline-none cursor-pointer shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/60 hover:scale-[1.01] active:scale-[0.99] mt-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 group-hover:opacity-90 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <span>Sign In</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>

              {/* Quick Demo One-Click Sign In */}
              <button
                type="button"
                onClick={handleDemoLogin}
                className={`w-full py-2.5 rounded-2xl text-xs font-semibold border flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                  darkMode ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800' : 'border-slate-300 bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Quick Demo Sign In (1-Click)</span>
              </button>

            </form>

            {/* Sign Up Redirect */}
            <div className="mt-8 pt-6 border-t border-slate-800/60 text-center text-xs text-slate-400">
              <span>Don't have an account? </span>
              <button
                onClick={() => onNavigate('signup')}
                className="text-indigo-400 hover:text-indigo-300 font-bold transition-colors cursor-pointer"
              >
                Sign Up
              </button>
            </div>

          </div>
        </div>
      </motion.div>

    </div>
  );
};
