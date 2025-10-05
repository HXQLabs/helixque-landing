"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Video, VideoOff, Mic, MicOff, User } from "lucide-react";

interface User {
  id: string;
  avatar: string;
  status: "connecting" | "connected" | "disconnected";
  isVideoOn: boolean;
  isAudioOn: boolean;
}

const HelixqueConnection = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [user1, setUser1] = useState<User>({
    id: "user1",
    avatar: "You",
    status: "connecting",
    isVideoOn: true,
    isAudioOn: true,
  });

  const [user2, setUser2] = useState<User>({
    id: "user2",
    avatar: "Stranger",
    status: "disconnected",
    isVideoOn: true,
    isAudioOn: true,
  });

  const [connectionStatus, setConnectionStatus] = useState<
    | "user_connecting"
    | "system_activated"
    | "system_searching"
    | "match_found"
    | "connected"
    | "skipped"
  >("user_connecting");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Connection flow cycle
  useEffect(() => {
    const cycle = async () => {
      // Step 1: User connects to system
      setConnectionStatus("user_connecting");
      setUser1((prev) => ({ ...prev, status: "connecting" }));
      setUser2((prev) => ({ ...prev, status: "disconnected" }));
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Step 2: User connected, system gets activated
      setConnectionStatus("system_activated");
      setUser1((prev) => ({ ...prev, status: "connected" }));
      setUser2((prev) => ({ ...prev, status: "disconnected" }));
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Step 3: System starts searching for match
      setConnectionStatus("system_searching");
      await new Promise((resolve) => setTimeout(resolve, 2500));

      // Step 4: Match found, connecting second user
      setConnectionStatus("match_found");
      setUser2((prev) => ({ ...prev, status: "connecting" }));
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Step 5: Connection established, user card gets activated
      setConnectionStatus("connected");
      setUser2((prev) => ({ ...prev, status: "connected" }));
      await new Promise((resolve) => setTimeout(resolve, 4000));

      // Step 6: Skip connection (simulate skip button)
      setConnectionStatus("skipped");
      setUser2((prev) => ({
        ...prev,
        status: "disconnected",
        avatar: "Stranger",
      }));
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset: User stays connected, ready for next match
      setUser1((prev) => ({ ...prev, status: "connected" }));
    };

    const interval = setInterval(cycle, 14000);
    cycle(); // Start immediately

    return () => clearInterval(interval);
  }, []);

  const toggleUserVideo = (userId: string) => {
    if (userId === "user1") {
      setUser1((prev) => ({ ...prev, isVideoOn: !prev.isVideoOn }));
    } else {
      setUser2((prev) => ({ ...prev, isVideoOn: !prev.isVideoOn }));
    }
  };

  const toggleUserAudio = (userId: string) => {
    if (userId === "user1") {
      setUser1((prev) => ({ ...prev, isAudioOn: !prev.isAudioOn }));
    } else {
      setUser2((prev) => ({ ...prev, isAudioOn: !prev.isAudioOn }));
    }
  };

  if (!mounted) {
    return null;
  }

  const UserCard = ({ user }: { user: User }) => (
    <div
      className={`relative w-20 sm:w-28 h-28 sm:h-36 bg-gray-100 dark:bg-neutral-800 rounded-lg border border-gray-300 dark:border-neutral-700 overflow-hidden flex flex-col ${
        user.status === "disconnected" ? "opacity-40" : "opacity-100"
      } transition-opacity duration-500`}
    >
      {/* Video feed simulation */}
      <div className="h-14 sm:h-20 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-neutral-700 dark:to-neutral-800 flex items-center justify-center relative">
        {user.isVideoOn ? (
          <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-300 dark:bg-neutral-600 rounded-full flex items-center justify-center">
            <User className="w-4 sm:w-5 h-4 sm:h-5 text-gray-600 dark:text-neutral-300" />
          </div>
        ) : (
          <VideoOff className="w-4 sm:w-5 h-4 sm:h-5 text-gray-500 dark:text-neutral-500" />
        )}

        {/* Status indicator */}
        <div className="absolute top-1 sm:top-2 right-1 sm:right-2">
          <motion.div
            className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${
              user.status === "connected"
                ? "bg-green-500"
                : user.status === "connecting"
                ? "bg-yellow-500"
                : "bg-neutral-500"
            }`}
            animate={{
              scale: user.status === "connected" ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: user.status === "connected" ? Infinity : 0,
            }}
          />
        </div>
      </div>

      {/* User info */}
      <div className="px-1 sm:px-2 py-1 sm:py-1.5 text-center bg-gray-100 dark:bg-neutral-800 flex-1 flex flex-col justify-center">
        <div className="text-xs sm:text-xs text-gray-700 dark:text-neutral-300 font-medium truncate">
          {user.avatar}
        </div>
      </div>

      {/* Controls */}
      <div className="p-1 sm:p-2 flex justify-center gap-1 bg-gray-100 dark:bg-neutral-800 border-t border-gray-300 dark:border-neutral-700">
        <button
          className={`p-1 rounded text-xs ${
            user.isVideoOn ? "bg-blue-600" : "bg-gray-400 dark:bg-neutral-600"
          } transition-colors touch-manipulation`}
          onClick={() => toggleUserVideo(user.id)}
        >
          {user.isVideoOn ? (
            <Video className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-white" />
          ) : (
            <VideoOff className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-white" />
          )}
        </button>

        <button
          className={`p-1 rounded text-xs ${
            user.isAudioOn ? "bg-blue-600" : "bg-gray-400 dark:bg-neutral-600"
          } transition-colors touch-manipulation`}
          onClick={() => toggleUserAudio(user.id)}
        >
          {user.isAudioOn ? (
            <Mic className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-white" />
          ) : (
            <MicOff className="w-2 sm:w-2.5 h-2 sm:h-2.5 text-white" />
          )}
        </button>
      </div>
    </div>
  );

  // Central System component
  const CentralSystem = ({ isActive }: { isActive: boolean }) => (
    <div className="relative mx-3 sm:mx-6">
      <motion.div
        className={`w-16 sm:w-24 h-16 sm:h-24 rounded-xl border-2 flex items-center justify-center relative ${
          isActive
            ? "border-blue-500 bg-blue-900/20 dark:bg-blue-900/20"
            : "border-gray-400 dark:border-neutral-600 bg-gray-200 dark:bg-neutral-800"
        }`}
        animate={{
          borderColor: isActive
            ? "#3b82f6"
            : theme === "dark"
            ? "#525252"
            : "#9ca3af",
          backgroundColor: isActive
            ? "rgba(59, 130, 246, 0.1)"
            : theme === "dark"
            ? "#262626"
            : "#e5e7eb",
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Central logo/icon */}
        <motion.div
          className={`w-6 sm:w-8 h-6 sm:h-8 rounded-lg flex items-center justify-center ${
            isActive ? "bg-blue-600" : "bg-gray-500 dark:bg-neutral-600"
          }`}
          animate={{
            scale: isActive ? [1, 1.1, 1] : 1,
            backgroundColor: isActive
              ? "#2563eb"
              : theme === "dark"
              ? "#525252"
              : "#6b7280",
          }}
          transition={{
            scale: { duration: 2, repeat: Infinity },
            backgroundColor: { duration: 0.5 },
          }}
        >
          <Image
            src="/logo.svg"
            alt="HelixQue"
            width={16}
            height={16}
            className="w-3 sm:w-4 h-3 sm:h-4"
          />
        </motion.div>

        {/* System label */}
        <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 transform -translate-x-1/2">
          <div className="text-xs text-gray-600 dark:text-neutral-400 font-medium whitespace-nowrap">
            Helixque
          </div>
        </div>
      </motion.div>

      {/* Connection lines to users */}
      <div className="absolute top-1/2 -left-3 sm:-left-6 w-3 sm:w-6 h-px">
        <motion.div
          className={`w-full h-px ${
            isActive ? "bg-blue-500" : "bg-gray-400 dark:bg-neutral-600"
          }`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <div className="absolute top-1/2 -right-3 sm:-right-6 w-3 sm:w-6 h-px">
        <motion.div
          className={`w-full h-px ${
            isActive ? "bg-blue-500" : "bg-gray-400 dark:bg-neutral-600"
          }`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isActive ? 1 : 0 }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 rounded-lg">
      {/* Header with status */}
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <div className="flex items-center gap-2 text-gray-900 dark:text-white">
          <div
            className={`w-2 h-2 rounded-full ${
              connectionStatus === "connected"
                ? "bg-green-500"
                : connectionStatus === "user_connecting"
                ? "bg-yellow-500"
                : connectionStatus === "system_activated"
                ? "bg-blue-400"
                : connectionStatus === "system_searching"
                ? "bg-blue-500"
                : connectionStatus === "match_found"
                ? "bg-orange-500"
                : "bg-neutral-500"
            }`}
          />
          <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-neutral-300">
            {connectionStatus === "user_connecting"
              ? "Connecting..."
              : connectionStatus === "system_activated"
              ? "Connected..."
              : connectionStatus === "system_searching"
              ? "Searching..."
              : connectionStatus === "match_found"
              ? "Connecting..."
              : connectionStatus === "connected"
              ? "Connected..."
              : "Skipped..."}
          </span>
        </div>
      </div>

      {/* Users and central system */}
      <div className="flex items-center justify-center w-full mb-4 sm:mb-6">
        <UserCard user={user1} />

        <CentralSystem
          isActive={
            connectionStatus === "system_activated" ||
            connectionStatus === "system_searching" ||
            connectionStatus === "match_found" ||
            connectionStatus === "connected"
          }
        />

        <UserCard user={user2} />
      </div>
    </div>
  );
};

export default HelixqueConnection;
