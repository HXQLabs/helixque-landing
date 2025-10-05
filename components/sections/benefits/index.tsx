<<<<<<< HEAD
"use client";

import React, { useState, useEffect } from 'react';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';

const IntegrationsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-timer for carousel (changes every 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
      setProgress(0); // Reset progress when tab changes
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Progress animation for active tab
  useEffect(() => {
    setProgress(0);
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + (100 / 40); // 100% over 4 seconds (4000ms / 100ms intervals)
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [activeTab]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setProgress(0);
  };

  const tabContent = [
    {
      id: 0,
      title: "Design your Workflow",
      description: "A drag-and-drop interface to create, connect, and configure agents into logical workflows",
      icon: (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
          <path d="M8.02287 8.95395C7.99883 8.89366 7.993 8.82765 8.00609 8.76407C8.01918 8.7005 8.05061 8.64216 8.09651 8.59626C8.1424 8.55037 8.20075 8.51893 8.26432 8.50584C8.32789 8.49276 8.39391 8.49859 8.4542 8.52262L14.4542 10.856C14.5185 10.8811 14.5735 10.9256 14.6114 10.9833C14.6493 11.041 14.6684 11.1091 14.666 11.1781C14.6636 11.2471 14.6398 11.3137 14.5979 11.3686C14.556 11.4235 14.4981 11.464 14.4322 11.4846L12.1362 12.1966C12.0326 12.2286 11.9384 12.2855 11.8617 12.3621C11.785 12.4388 11.7282 12.533 11.6962 12.6366L10.9849 14.932C10.9643 14.9979 10.9237 15.0558 10.8688 15.0977C10.8139 15.1396 10.7474 15.1634 10.6783 15.1658C10.6093 15.1682 10.5412 15.1491 10.4835 15.1112C10.4258 15.0732 10.3813 15.0183 10.3562 14.954L8.02287 8.95395Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M14 7.83333V3.83333C14 3.47971 13.8595 3.14057 13.6095 2.89052C13.3594 2.64048 13.0203 2.5 12.6667 2.5H3.33333C2.97971 2.5 2.64057 2.64048 2.39052 2.89052C2.14048 3.14057 2 3.47971 2 3.83333V13.1667C2 13.5203 2.14048 13.8594 2.39052 14.1095C2.64057 14.3595 2.97971 14.5 3.33333 14.5H7.33333" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      rightContent: (
        <div className="mt-12 flex flex-col items-center">
          <div className="relative">
            <div className="relative h-full text-xs" style={{opacity: 1, transform: "none"}}>
              <div className="absolute inset-0 z-10 m-auto h-full w-full rounded-lg border border-(--pattern-fg) bg-white bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed dark:bg-neutral-900"></div>
              <div className="absolute inset-x-0 -top-1.5 mx-auto size-3 rounded-full border-2 border-gray-300 bg-white dark:border-neutral-700 dark:bg-neutral-900"></div>
              <div className="shadow-aceternity relative z-20 flex w-54 shrink-0 flex-col items-start rounded-lg bg-white dark:bg-neutral-900" style={{transform: "none"}}>
                <div className="flex w-full items-center justify-between p-2 md:p-4">
                  <div className="flex items-center gap-2 font-medium">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.0318 8.08621C3.0318 8.78366 2.46811 9.34735 1.77066 9.34735C1.07321 9.34735 0.509521 8.78366 0.509521 8.08621C0.509521 7.38876 1.07321 6.82507 1.77066 6.82507H3.0318V8.08621Z" fill="#E01E5A"></path>
                      <path d="M3.66235 8.08621C3.66235 7.38876 4.22604 6.82507 4.92349 6.82507C5.62094 6.82507 6.18463 7.38876 6.18463 8.08621V11.2391C6.18463 11.9365 5.62094 12.5002 4.92349 12.5002C4.22604 12.5002 3.66235 11.9365 3.66235 11.2391L3.66235 8.08621Z" fill="#E01E5A"></path>
                      <path d="M4.92374 3.02253C4.22629 3.02253 3.6626 2.45883 3.6626 1.76139C3.6626 1.06394 4.22629 0.500244 4.92374 0.500244C5.62119 0.500244 6.18488 1.06394 6.18488 1.76139V3.02253H4.92374Z" fill="#36C5F0"></path>
                      <path d="M4.92355 3.66284C5.621 3.66284 6.18469 4.22653 6.18469 4.92398C6.18469 5.62143 5.621 6.18512 4.92355 6.18512H1.76114C1.06369 6.18512 0.5 5.62143 0.5 4.92398C0.5 4.22653 1.06369 3.66284 1.76114 3.66284L4.92355 3.66284Z" fill="#36C5F0"></path>
                      <path d="M9.97852 4.92386C9.97852 4.22641 10.5422 3.66272 11.2397 3.66272C11.9371 3.66272 12.5008 4.22641 12.5008 4.92386C12.5008 5.62131 11.9371 6.185 11.2397 6.185H9.97852V4.92386Z" fill="#2EB67D"></path>
                      <path d="M9.34723 4.92379C9.34723 5.62124 8.78354 6.18493 8.08609 6.18493C7.38864 6.18493 6.82495 5.62124 6.82495 4.92379V1.76139C6.82495 1.06394 7.38864 0.500244 8.08609 0.500244C8.78354 0.500244 9.34723 1.06394 9.34723 1.76139V4.92379Z" fill="#2EB67D"></path>
                      <path d="M8.08609 9.97803C8.78354 9.97803 9.34723 10.5417 9.34723 11.2392C9.34723 11.9366 8.78354 12.5003 8.08609 12.5003C7.38864 12.5003 6.82495 11.9366 6.82495 11.2392V9.97803H8.08609Z" fill="#ECB22E"></path>
                      <path d="M8.08609 9.34735C7.38864 9.34735 6.82495 8.78366 6.82495 8.08621C6.82495 7.38876 7.38864 6.82507 8.08609 6.82507H11.2485C11.9459 6.82507 12.5096 7.38876 12.5096 8.08621C12.5096 8.78366 11.9459 9.34735 11.2485 9.34735H8.08609Z" fill="#ECB22E"></path>
                    </svg>
                    Slack
                  </div>
                  <p className="font-mono text-gray-600">#design</p>
                </div>
                <div className="bg-divide h-[1px] w-full"></div>
                <div className="m-4 rounded-sm border px-2 py-0.5 border-blue-500 bg-blue-50 text-blue-500 dark:bg-blue-50/10 dark:text-blue-500">
                  Workflow Designer
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: "Connect your Tools",
      description: "Agents operate independently and coordinate tasks to complete all complex goals together",
      icon: (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
          <path d="M8 12.5V3.83337" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M10 9.16667C9.4232 8.99806 8.91656 8.64708 8.556 8.16633C8.19544 7.68558 8.00036 7.10094 8 6.5C7.99964 7.10094 7.80456 7.68558 7.444 8.16633C7.08344 8.64708 6.5768 8.99806 6 9.16667" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M11.732 4.83322C11.8854 4.56754 11.9756 4.27014 11.9957 3.96401C12.0158 3.65789 11.9652 3.35125 11.8478 3.06781C11.7304 2.78438 11.5494 2.53175 11.3187 2.32947C11.0881 2.12719 10.814 1.98068 10.5176 1.90128C10.2213 1.82188 9.91069 1.81171 9.6098 1.87156C9.30891 1.93142 9.02583 2.05969 8.78244 2.24645C8.53906 2.43321 8.3419 2.67346 8.20623 2.94861C8.07055 3.22376 7.99999 3.52643 8 3.83322C8.00001 3.52643 7.92945 3.22376 7.79377 2.94861C7.6581 2.67346 7.46094 2.43321 7.21756 2.24645C6.97417 2.05969 6.69109 1.93142 6.3902 1.87156C6.08931 1.81171 5.77868 1.82188 5.48236 1.90128C5.18603 1.98068 4.91193 2.12719 4.68129 2.32947C4.45064 2.53175 4.26961 2.78438 4.15222 3.06781C4.03483 3.35125 3.98421 3.65789 4.00429 3.96401C4.02436 4.27014 4.11459 4.56754 4.268 4.83322" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M11.998 3.91663C12.3899 4.01738 12.7537 4.20599 13.0619 4.46817C13.3701 4.73034 13.6146 5.05921 13.7768 5.42986C13.9391 5.80051 14.0149 6.20322 13.9985 6.6075C13.982 7.01178 13.8738 7.40702 13.682 7.76329" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M12 12.4999C12.587 12.4999 13.1576 12.3062 13.6233 11.9488C14.089 11.5915 14.4238 11.0905 14.5757 10.5235C14.7276 9.95645 14.6882 9.35516 14.4636 8.81284C14.239 8.27051 13.8417 7.81745 13.3333 7.52393" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M13.3114 12.1553C13.3581 12.5168 13.3303 12.884 13.2295 13.2343C13.1287 13.5846 12.9572 13.9105 12.7256 14.1919C12.4939 14.4733 12.207 14.7043 11.8826 14.8704C11.5582 15.0366 11.2032 15.1346 10.8394 15.1582C10.4757 15.1818 10.111 15.1306 9.76782 15.0077C9.42466 14.8848 9.11033 14.6929 8.84424 14.4438C8.57815 14.1947 8.36596 13.8937 8.22077 13.5593C8.07558 13.225 8.00047 12.8644 8.00008 12.4999C7.99969 12.8644 7.92458 13.225 7.77939 13.5593C7.6342 13.8937 7.42201 14.1947 7.15592 14.4438C6.88983 14.6929 6.5755 14.8848 6.23234 15.0077C5.88917 15.1306 5.52446 15.1818 5.16073 15.1582C4.797 15.1346 4.44197 15.0366 4.11756 14.8704C3.79315 14.7043 3.50626 14.4733 3.2746 14.1919C3.04294 13.9105 2.87144 13.5846 2.77067 13.2343C2.66991 12.884 2.64202 12.5168 2.68875 12.1553" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M3.9998 12.4999C3.4128 12.4999 2.84221 12.3062 2.37651 11.9488C1.91082 11.5915 1.57605 11.0905 1.42412 10.5235C1.27219 9.95645 1.31159 9.35516 1.53621 8.81284C1.76083 8.27051 2.15812 7.81745 2.66647 7.52393" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M4.00187 3.91663C3.61001 4.01738 3.24621 4.20599 2.93803 4.46817C2.62985 4.73034 2.38536 5.05921 2.2231 5.42986C2.06084 5.80051 1.98504 6.20322 2.00146 6.6075C2.01788 7.01178 2.12608 7.40702 2.31787 7.76329" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      rightContent: (
        <div className="mt-12 flex flex-row gap-4.5">
          <div className="relative h-full text-xs">
            <div className="shadow-aceternity relative z-20 flex w-54 shrink-0 flex-col items-start rounded-lg bg-white dark:bg-neutral-900">
              <div className="flex w-full items-center justify-between p-2 md:p-4">
                <div className="flex items-center gap-2 font-medium">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.35264 7.97774L4.71136 6.65419L4.75082 6.53883L4.71136 6.47508H4.596L4.20137 6.4508L2.85353 6.41437L1.6848 6.3658L0.552492 6.30509L0.267139 6.24437L0 5.89223L0.027321 5.71617L0.267139 5.55528L0.61017 5.58563L1.36909 5.63724L2.50746 5.71617L3.33316 5.76474L4.55654 5.89223H4.75082L4.77814 5.81331L4.71136 5.76474L4.65975 5.71617L3.48191 4.91778L2.20693 4.07387L1.53908 3.58816L1.17784 3.34227L0.9957 3.11156L0.916772 2.60764L1.24462 2.2464L1.6848 2.27675L1.79712 2.30711L2.24336 2.65014L3.19656 3.38781L4.44118 4.30458L4.62332 4.45636L4.69618 4.40476L4.70529 4.36833L4.62332 4.23172L3.94637 3.00835L3.22388 1.76372L2.9021 1.24766L2.8171 0.938022C2.78674 0.810524 2.76549 0.704275 2.76549 0.573741L3.13888 0.0667847L3.34531 0L3.84316 0.0667847L4.05262 0.248925L4.36226 0.956236L4.86314 2.07033L5.64027 3.58513L5.86795 4.0344L5.98938 4.45029L6.03491 4.57779H6.11384V4.50493L6.17759 3.65191L6.29598 2.6046L6.41133 1.25677L6.4508 0.877308L6.63901 0.421958L7.0124 0.176069L7.30382 0.31571L7.54364 0.65874L7.51025 0.880344L7.36757 1.80622L7.08829 3.25727L6.90615 4.22869H7.0124L7.13382 4.10726L7.6256 3.45459L8.4513 2.42246L8.81558 2.01265L9.24058 1.56033L9.51379 1.3448H10.0299L10.4093 1.90944L10.2393 2.49228L9.70807 3.1662L9.2679 3.73691L8.63648 4.5869L8.24184 5.26689L8.27827 5.32153L8.37238 5.31242L9.79914 5.00885L10.5702 4.86921L11.49 4.71136L11.9059 4.90564L11.9514 5.10296L11.7875 5.5067L10.8039 5.74956L9.65039 5.98027L7.9322 6.38705L7.91095 6.40223L7.93524 6.43258L8.70934 6.50544L9.04022 6.52365H9.85075L11.3595 6.63597L11.7541 6.89704L11.9909 7.21579L11.9514 7.45864L11.3443 7.76828L10.5247 7.574L8.61219 7.11864L7.95649 6.95472H7.86542V7.00936L8.41184 7.54364L9.41361 8.44827L10.6673 9.61397L10.7311 9.90235L10.5702 10.13L10.4002 10.1057L9.29825 9.27701L8.87326 8.90362L7.91095 8.09309H7.84721V8.17809L8.06881 8.50291L9.24058 10.2636L9.30129 10.8039L9.21629 10.98L8.91273 11.0863L8.5788 11.0256L7.89274 10.0632L7.18543 8.97951L6.61472 8.0081L6.5449 8.04756L6.20794 11.6752L6.05009 11.8604L5.68581 12L5.38224 11.7693L5.22135 11.3959L5.38224 10.6582L5.57652 9.69593L5.73438 8.93094L5.87706 7.98077L5.96205 7.66506L5.95598 7.64382L5.88616 7.65292L5.16974 8.63648L4.07994 10.1088L3.21781 11.0316L3.01138 11.1136L2.65317 10.9284L2.68657 10.5975L2.88692 10.3031L4.07994 8.78523L4.79939 7.84417L5.26385 7.30079L5.26082 7.22186H5.23349L2.06426 9.28004L1.49962 9.3529L1.25677 9.12522L1.28712 8.75183L1.40248 8.63041L2.35568 7.9747L2.35264 7.97774Z" fill="#D97757"></path>
                  </svg>
                  Anthropic
                </div>
                <p className="font-mono text-gray-600">Claude 4</p>
              </div>
              <div className="bg-divide h-[1px] w-full"></div>
              <div className="m-4 rounded-sm border px-2 py-0.5 border-orange-500 bg-red-50 text-orange-500 dark:bg-red-50/10 dark:text-red-500">
                Connected
              </div>
            </div>
          </div>
          
          <div className="relative h-full text-xs">
            <div className="shadow-aceternity relative z-20 flex w-54 shrink-0 flex-col items-start rounded-lg bg-white dark:bg-neutral-900">
              <div className="flex w-full items-center justify-between p-2 md:p-4">
                <div className="flex items-center gap-2 font-medium">
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3 0.5C10.0661 0.5 9.10152 1.42936 8.22836 2.60993C7.02847 1.08215 6.025 0.5 4.82414 0.5C2.37586 0.5 0.5 3.68621 0.5 7.05862C0.5 9.16896 1.52096 10.5 3.23103 10.5C4.46184 10.5 5.34703 9.91974 6.92069 7.16897C6.92069 7.16897 7.57666 6.01055 8.02794 5.21258C8.18607 5.4679 8.35262 5.74302 8.52759 6.03793L9.26552 7.27931C10.703 9.68479 11.5039 10.5 12.9552 10.5C14.6211 10.5 15.5483 9.15077 15.5483 6.99655C15.5483 3.46552 13.6301 0.5 11.3 0.5ZM5.72069 6.42414C4.44483 8.42414 4.00345 8.87241 3.2931 8.87241C2.56207 8.87241 2.12759 8.23063 2.12759 7.08621C2.12759 4.63793 3.34828 2.13448 4.80345 2.13448C5.59146 2.13448 6.24999 2.58958 7.25867 4.03361C6.30088 5.50272 5.72069 6.42414 5.72069 6.42414ZM10.536 6.17236L9.65367 4.70088C9.4149 4.31256 9.18544 3.95512 8.96529 3.62858C9.76049 2.40122 10.4164 1.78966 11.1966 1.78966C12.8172 1.78966 14.1138 4.17587 14.1138 7.1069C14.1138 8.22414 13.7479 8.87242 12.9897 8.87242C12.2629 8.87241 11.9158 8.39247 10.536 6.17236Z" fill="#2762E7"></path>
                  </svg>
                  Meta
                </div>
                <p className="font-mono text-gray-600">Llama 2</p>
              </div>
              <div className="bg-divide h-[1px] w-full"></div>
              <div className="m-4 rounded-sm border px-2 py-0.5 border-blue-500 bg-blue-50 text-blue-500 dark:bg-blue-50/10 dark:text-blue-500">
                Connected
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Deploy & Scale",
      description: "Run agent workflows in a sandbox to preview behavior, debug logic, and test interactions",
      icon: (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
          <path d="M10.6667 9.16664L14.1487 11.488C14.1989 11.5214 14.2573 11.5405 14.3175 11.5434C14.3777 11.5463 14.4376 11.5328 14.4907 11.5043C14.5439 11.4759 14.5883 11.4335 14.6193 11.3818C14.6503 11.3301 14.6667 11.2709 14.6667 11.2106V5.74664C14.6668 5.68799 14.6513 5.63037 14.6219 5.57961C14.5926 5.52884 14.5503 5.48672 14.4995 5.45751C14.4486 5.42829 14.3909 5.41301 14.3323 5.41321C14.2736 5.41341 14.2161 5.42908 14.1654 5.45864L10.6667 7.49997" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
          <path d="M9.33325 4.5H2.66659C1.93021 4.5 1.33325 5.09695 1.33325 5.83333V11.1667C1.33325 11.903 1.93021 12.5 2.66659 12.5H9.33325C10.0696 12.5 10.6666 11.903 10.6666 11.1667V5.83333C10.6666 5.09695 10.0696 4.5 9.33325 4.5Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      ),
      rightContent: (
        <div className="mt-12 flex flex-col items-center">
          <div className="relative h-full text-xs">
            <div className="shadow-aceternity relative z-20 flex w-54 shrink-0 flex-col items-start rounded-lg bg-white dark:bg-neutral-900">
              <div className="flex w-full items-center justify-between p-2 md:p-4">
                <div className="flex items-center gap-2 font-medium">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_557_586" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="13">
                      <path d="M12.6081 0.5H0.5V12.5H12.6081V0.5Z" fill="white"></path>
                    </mask>
                    <g mask="url(#mask0_557_586)">
                      <path d="M5.14399 4.86798V3.72797C5.14399 3.63196 5.18002 3.55994 5.26398 3.51197L7.55605 2.19199C7.86804 2.012 8.24006 1.92804 8.62401 1.92804C10.064 1.92804 10.976 3.04406 10.976 4.23202C10.976 4.316 10.976 4.41201 10.964 4.50802L8.58799 3.11599C8.44401 3.03201 8.29996 3.03201 8.15598 3.11599L5.14399 4.86798ZM10.496 9.30801V6.58396C10.496 6.41589 10.4239 6.29592 10.28 6.21194L7.26799 4.45995L8.25199 3.89591C8.33597 3.84797 8.408 3.84797 8.49198 3.89591L10.784 5.21591C11.4441 5.59996 11.888 6.41589 11.888 7.20787C11.888 8.11984 11.3481 8.95986 10.496 9.30791V9.30801ZM4.43599 6.90803L3.45199 6.33206C3.36804 6.28409 3.332 6.21207 3.332 6.11605V3.47608C3.332 2.19209 4.316 1.22002 5.64803 1.22002C6.15209 1.22002 6.61999 1.38809 7.01609 1.68805L4.6521 3.05612C4.50814 3.14008 4.43612 3.26007 4.43612 3.42811V6.90813L4.43599 6.90803ZM6.55402 8.13199L5.14399 7.34002V5.66008L6.55402 4.86811L7.96395 5.66008V7.34002L6.55402 8.13199ZM7.46001 11.7801C6.95597 11.7801 6.48807 11.612 6.09197 11.312L8.45594 9.94398C8.59992 9.86002 8.67195 9.74003 8.67195 9.57197V6.09197L9.668 6.66794C9.75196 6.71588 9.788 6.78791 9.788 6.88392V9.5239C9.788 10.8079 8.79194 11.78 7.46001 11.78V11.7801ZM4.61599 9.10406L2.32392 7.78406C1.66387 7.40002 1.21992 6.58408 1.21992 5.79211C1.21992 4.86811 1.77193 4.04012 2.62388 3.69209V6.42807C2.62388 6.59611 2.69593 6.71611 2.83989 6.80006L5.83995 8.54002L4.85595 9.10406C4.77199 9.15201 4.69994 9.15201 4.61599 9.10406ZM4.48406 11.0721C3.12805 11.0721 2.13202 10.052 2.13202 8.79204C2.13202 8.69603 2.14405 8.60002 2.15598 8.50401L4.51997 9.87205C4.66393 9.95604 4.80801 9.95604 4.95196 9.87205L7.96395 8.13212V9.2721C7.96395 9.36814 7.92794 9.44016 7.84396 9.48811L5.55192 10.8081C5.2399 10.9881 4.86788 11.0721 4.48394 11.0721H4.48406ZM7.46001 12.5C8.91204 12.5 10.124 11.468 10.4001 10.1C11.7441 9.75196 12.6081 8.49196 12.6081 7.20799C12.6081 6.36795 12.2481 5.55202 11.6001 4.96399C11.6601 4.71197 11.6961 4.45995 11.6961 4.20806C11.6961 2.49208 10.3041 1.20799 8.69603 1.20799C8.37211 1.20799 8.06009 1.25594 7.74807 1.364C7.20799 0.835977 6.46399 0.5 5.64803 0.5C4.19603 0.5 2.98409 1.53194 2.70799 2.89998C1.364 3.24802 0.5 4.50802 0.5 5.79198C0.5 6.63203 0.859961 7.44796 1.50798 8.03598C1.44798 8.288 1.41197 8.54002 1.41197 8.79192C1.41197 10.5079 2.804 11.792 4.41201 11.792C4.73596 11.792 5.04797 11.744 5.35999 11.636C5.89995 12.164 6.64395 12.5 7.46001 12.5Z" fill="currentColor"></path>
                    </g>
                  </svg>
                  OpenAI
                </div>
                <p className="font-mono text-gray-600">GPT-5</p>
              </div>
              <div className="bg-divide h-[1px] w-full"></div>
              <div className="m-4 rounded-sm border px-2 py-0.5 border-green-500 bg-green-50 text-green-500 dark:bg-green-50/10 dark:text-green-500">
                Deployed
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-sm border border-gray-300 bg-gray-50 px-3 py-1 text-xs text-gray-600 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
              <div className="size-2 rounded-full bg-green-500"></div>
              Production Ready
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="w-full min-h-screen relative bg-white dark:bg-black z-10">
      <div className="max-w-7xl mx-auto relative overflow-hidden px-4 py-20 md:px-8">
      <div className="flex flex-col items-center pt-16">
        <AnimatedShinyText>
          How it works
        </AnimatedShinyText>
        <h2 className="text-charcoal-700 text-center text-2xl font-medium tracking-tight md:text-3xl lg:text-4xl dark:text-neutral-100 mt-4">
          Integrates easily
        </h2>
        <p className="text-center text-sm font-medium tracking-tight text-gray-600 md:text-sm lg:text-base dark:text-gray-300 mx-auto mt-6 max-w-lg">
          We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually
        </p>

        {/* Desktop grid layout */}
        <div className="border-divide divide-divide mt-16 hidden w-full grid-cols-2 divide-x border-t lg:grid">
          {/* Left side - Navigation buttons */}
          <div className="divide-divide divide-y">
            {tabContent.map((tab, index) => (
              <button 
                key={tab.id}
                onClick={() => handleTabClick(index)}
                className={`group relative flex w-full flex-col items-start overflow-hidden px-12 py-8 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-all duration-300 ${
                  activeTab === index ? 'bg-gray-50 dark:bg-neutral-800' : ''
                }`}
              >
                {/* Background overlay for active tab */}
                {activeTab === index && (
                  <div className="absolute inset-x-0 z-10 h-full w-full bg-white mask-t-from-50% dark:bg-neutral-900"></div>
                )}
                <canvas className="w-full h-full absolute inset-0 scale-[1.01] opacity-20" style={{imageRendering: "pixelated"}}></canvas>
                
                <div className={`text-charcoal-700 relative z-20 flex items-center gap-2 font-medium dark:text-neutral-100 transition-colors duration-200 ${
                  activeTab === index ? 'text-blue-600 dark:text-blue-400' : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'
                }`}>
                  {tab.icon}
                  {tab.title}
                </div>
                <p className="relative z-20 mt-2 text-left text-sm dark:text-neutral-300 text-charcoal-700">
                  {tab.description}
                </p>

                {/* Small progress bar at bottom - only show for active tab */}
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-neutral-700 z-20">
                    <div 
                      className="h-full bg-blue-500 transition-all duration-200"
                      style={{
                        width: `${progress}%`
                      }}
                    ></div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Right side - Dynamic content based on active tab */}
          <div className="relative h-full max-h-[370px] overflow-hidden bg-[radial-gradient(var(--color-dots)_1px,transparent_1px)] mask-r-from-90% mask-l-from-90% mask-radial-from-20%" style={{backgroundSize: "10px 10px"}}>
            <div className="absolute inset-0" style={{filter: "blur(0px)", opacity: 1}}>
              <div className="flex flex-col items-center justify-center h-full">
                <div className="transition-all duration-500 ease-in-out">
                  {tabContent[activeTab].rightContent}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout */}
        <div className="divide-divide border-divide mt-16 flex w-full flex-col divide-y overflow-hidden border-t lg:hidden">
          {/* Mobile version would contain simplified versions of the above */}
          <div className="group relative flex w-full flex-col items-start overflow-hidden px-4 py-4 md:px-12 md:py-8">
            <div className="text-charcoal-700 relative z-20 flex items-center gap-2 font-medium dark:text-neutral-100">
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M8.02287 8.95395C7.99883 8.89366 7.993 8.82765 8.00609 8.76407C8.01918 8.7005 8.05061 8.64216 8.09651 8.59626C8.1424 8.55037 8.20075 8.51893 8.26432 8.50584C8.32789 8.49276 8.39391 8.49859 8.4542 8.52262L14.4542 10.856C14.5185 10.8811 14.5735 10.9256 14.6114 10.9833C14.6493 11.041 14.6684 11.1091 14.666 11.1781C14.6636 11.2471 14.6398 11.3137 14.5979 11.3686C14.556 11.4235 14.4981 11.464 14.4322 11.4846L12.1362 12.1966C12.0326 12.2286 11.9384 12.2855 11.8617 12.3621C11.785 12.4388 11.7282 12.533 11.6962 12.6366L10.9849 14.932C10.9643 14.9979 10.9237 15.0558 10.8688 15.0977C10.8139 15.1396 10.7474 15.1634 10.6783 15.1658C10.6093 15.1682 10.5412 15.1491 10.4835 15.1112C10.4258 15.0732 10.3813 15.0183 10.3562 14.954L8.02287 8.95395Z" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M14 7.83333V3.83333C14 3.47971 13.8595 3.14057 13.6095 2.89052C13.3594 2.64048 13.0203 2.5 12.6667 2.5H3.33333C2.97971 2.5 2.64057 2.64048 2.39052 2.89052C2.14048 3.14057 2 3.47971 2 3.83333V13.1667C2 13.5203 2.14048 13.8594 2.39052 14.1095C2.64057 14.3595 2.97971 14.5 3.33333 14.5H7.33333" stroke="currentColor" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              Design your Workflow
            </div>
            <p className="relative z-20 mt-2 text-left text-sm text-gray-600 dark:text-neutral-300">
              A drag-and-drop interface to create, connect, and configure agents into logical workflows
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
=======
'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ChartBarIncreasingIcon, Database, Fingerprint, IdCard } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BorderBeam } from '@/components/ui/border-beam'

export default function IntegerationSection() {
    type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
    const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

    const images = {
        'item-1': {
            image: '',
            alt: 'Database visualization',
        },
        'item-2': {
            image: '/music.png',
            alt: 'Security authentication',
        },
        'item-3': {
            image: '/mail2.png',
            alt: 'Identity management',
        },
        'item-4': {
            image: '/payments.png',
            alt: 'Analytics dashboard',
        },
    }

    return (
        <section className="py-12 md:py-20 lg:py-32">
            <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20 dark:[--color-border:color-mix(in_oklab,var(--color-white)_10%,transparent)]">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-6xl">The foundation for AI</h2>
                    <p>Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</p>
                </div>

                <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
                    <Accordion
                        type="single"
                        value={activeItem}
                        onValueChange={(value) => setActiveItem(value as ImageKey)}
                        className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Database className="size-4" />
                                    Database Visualization
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <Fingerprint className="size-4" />
                                    Advanced Authentication
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <IdCard className="size-4" />
                                    Identity Management
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2 text-base">
                                    <ChartBarIncreasingIcon className="size-4" />
                                    Analytics Dashboard
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>Lyra is evolving to be more than just the models. It supports an entire to the APIs and platforms helping developers and businesses innovate.</AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="bg-background relative flex overflow-hidden rounded-3xl border p-2">
                        <div className="w-15 absolute inset-0 right-0 ml-auto border-l bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_8px)]"></div>
                        <div className="aspect-76/59 bg-background relative w-[calc(3/4*100%+3rem)] rounded-2xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeItem}-id`}
                                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                    className="size-full overflow-hidden rounded-2xl border bg-zinc-900 shadow-md">
                                    <Image
                                        src={images[activeItem].image}
                                        className="size-full object-cover object-left-top dark:mix-blend-lighten"
                                        alt={images[activeItem].alt}
                                        width={1207}
                                        height={929}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        <BorderBeam
                            duration={6}
                            size={200}
                            className="from-transparent via-yellow-700 to-transparent dark:via-white/50"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
>>>>>>> 6bdcb071f8f981c2f992021d395030db71fccd29
