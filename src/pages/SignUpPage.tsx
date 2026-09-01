import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  UserPlus, 
  User, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PageType, UserAccount } from '../types';
import portraitImg from '../assets/images/irfan_green_portrait_1787860891859.jpg';

interface SignUpPageProps {
  darkMode: boolean;
  onNavigate: (page: PageType) => void;
  onLoginSuccess: (user: UserAccount) => void;
}

export const SignUpPage: React.FC<SignUpPageProps> = ({ darkMode, onNavigate, onLoginSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match. Please verify.');
      return;
    }
    if (password.length < 6) {
      setError('Password should be at least 6 characters long.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
      const user: UserAccount = {
        name: fullName || email.split('@')[0],
        email: email,
        isLoggedIn: true
      };
      onLoginSuccess(user);
      onNavigate('home');
    }, 1200);
  };

  return (
    <div id="signup-page" className="relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        {/* Outer Glow Wrapper */}
        <div className="relative group rounded-3xl p-[2px]">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 opacity-35 blur-lg group-hover:opacity-60 transition duration-500" />

          {/* Glassmorphic Signup Card */}
          <div className={`relative rounded-[22px] p-8 sm:p-10 backdrop-blur-2xl border ${
            darkMode 
              ? 'bg-slate-950/90 border-slate-800 text-slate-100 shadow-2xl' 
              : 'bg-white/95 border-slate-200 text-slate-900 shadow-2xl'
          }`}>
            
            {/* Header */}
            <div className="text-center space-y-2 mb-8">
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 via-indigo-600 to-purple-600 p-[2px] mx-auto mb-3 shadow-lg shadow-purple-500/20">
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
                Create Account
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Join the developer network and bookmark favorite projects.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold">
                {error}
              </div>
            )}

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider font-mono text-slate-400">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full pl-11 pr-4 py-3 rounded-2xl border text-sm focus:outline-none transition-all ${
                      darkMode 
                        ? 'bg-slate-900/80 border-slate-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                    }`}
                  />
                </div>
              </div>

              {/* Email Address */}
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
                    placeholder="At least 6 characters"
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

              {/* Confirm Password */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider font-mono text-slate-400">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="Repeat password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full pl-11 pr-4 py-3 rounded-2xl border text-sm focus:outline-none transition-all ${
                      darkMode 
                        ? 'bg-slate-900/80 border-slate-700 text-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
                    }`}
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center gap-2 text-xs pt-1">
                <input
                  type="checkbox"
                  required
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-700 bg-slate-800"
                />
                <span className="text-slate-400">
                  I agree to the <span className="text-indigo-400">Terms of Service</span> &amp; <span className="text-indigo-400">Privacy Policy</span>
                </span>
              </div>

              {/* Create Account Button */}
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
                      <span>Creating Account...</span>
                    </>
                  ) : (
                    <>
                      <span>Create Account</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>

            </form>

            {/* Sign In Redirect */}
            <div className="mt-8 pt-6 border-t border-slate-800/60 text-center text-xs text-slate-400">
              <span>Already have an account? </span>
              <button
                onClick={() => onNavigate('signin')}
                className="text-indigo-400 hover:text-indigo-300 font-bold transition-colors cursor-pointer"
              >
                Sign In
              </button>
            </div>

          </div>
        </div>
      </motion.div>

    </div>
  );
};
