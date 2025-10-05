import React from "react";
export type IconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
    // ...other icons
    discord: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            {/* Icon from Google Material Icons by Material Design Authors */}
            <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12" />
        </svg>
    ),
    github: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            {/* Icon from Material Design Icons by Pictogrammers - https://github.com/Templarian/MaterialDesign/blob/master/LICENSE */}
            <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" />
        </svg>
    ),
    hacktoberfest: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 66 28" fill="none" {...props}>
            {/* Icon from Hacktoberfest */}
            <path d="M35.1157 20.5716V12.2056H42.6452V13.7593L41.8086 14.5959H37.7451V15.6715H41.211V18.0618H37.7451V20.5716H35.1157Z" fill="currentColor" />
            <path d="M25.1968 20.5716V12.2056H27.8261V15.1934H31.4116V12.2056H34.0409V20.5716H31.4116V17.5837H27.8261V20.5716H25.1968Z" fill="currentColor" />
            <rect x="34.5977" y="30.0415" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="36.8862" y="30.0415" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="36.8862" y="27.7534" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="39.1782" y="25.4648" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="39.1782" y="23.1763" width="2.28956" height="2.28956" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 34.5977 2.57812)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 36.8862 2.57812)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 36.8862 4.8667)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 39.1782 7.15527)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 32.3057 30.0415)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 30.0171 30.0415)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 30.0171 27.7534)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 27.7251 25.4648)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 27.7251 23.1763)" fill="currentColor" />
            <rect x="32.3057" y="2.57812" width="2.28956" height="2.28956" transform="rotate(180 32.3057 2.57812)" fill="currentColor" />
            <rect x="30.0171" y="2.57812" width="2.28956" height="2.28956" transform="rotate(180 30.0171 2.57812)" fill="currentColor" />
            <rect x="30.0171" y="4.8667" width="2.28956" height="2.28956" transform="rotate(180 30.0171 4.8667)" fill="currentColor" />
            <rect x="27.7251" y="7.15527" width="2.28956" height="2.28956" transform="rotate(180 27.7251 7.15527)" fill="currentColor" />
            <rect x="39.1665" y="0.279785" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="41.4551" y="2.56836" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="43.7471" y="2.56836" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="46.0352" y="4.85693" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="48.3271" y="7.14502" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="48.3271" y="9.44043" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="50.6157" y="11.729" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="50.6157" y="14.0176" width="2.28956" height="2.28956" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 39.1665 32.3433)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 41.4551 30.0547)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 43.7471 30.0547)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 46.0352 27.7661)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 48.3271 25.478)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 48.3271 23.1826)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 50.6157 20.894)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 50.6157 18.6055)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 27.73 0.279785)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 25.4414 2.56836)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 23.1494 2.56836)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 20.8613 4.85693)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 18.5693 7.14502)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 18.5693 9.44043)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 16.2808 11.729)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 16.2808 14.0176)" fill="currentColor" />
            <rect x="27.73" y="32.3433" width="2.28956" height="2.28956" transform="rotate(180 27.73 32.3433)" fill="currentColor" />
            <rect x="25.4414" y="30.0547" width="2.28956" height="2.28956" transform="rotate(180 25.4414 30.0547)" fill="currentColor" />
            <rect x="23.1494" y="30.0547" width="2.28956" height="2.28956" transform="rotate(180 23.1494 30.0547)" fill="currentColor" />
            <rect x="20.8613" y="27.7661" width="2.28956" height="2.28956" transform="rotate(180 20.8613 27.7661)" fill="currentColor" />
            <rect x="18.5693" y="25.478" width="2.28956" height="2.28956" transform="rotate(180 18.5693 25.478)" fill="currentColor" />
            <rect x="18.5693" y="23.1826" width="2.28956" height="2.28956" transform="rotate(180 18.5693 23.1826)" fill="currentColor" />
            <rect x="16.2808" y="20.894" width="2.28956" height="2.28956" transform="rotate(180 16.2808 20.894)" fill="currentColor" />
            <rect x="16.2808" y="18.6055" width="2.28956" height="2.28956" transform="rotate(180 16.2808 18.6055)" fill="currentColor" />
            <rect x="43.7544" y="0.282227" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="46.0464" y="2.5708" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="46.0464" y="0.282227" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="48.3345" y="2.5708" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="50.6265" y="4.85938" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="50.6265" y="2.5708" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="52.915" y="4.85938" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="55.2036" y="7.14746" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="57.4922" y="9.44287" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="57.4922" y="11.7314" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="41.4658" y="0.282227" width="2.28956" height="2.28956" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 43.7544 32.3457)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 41.4658 32.3457)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 46.0464 30.0571)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 46.0464 32.3457)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 48.3345 30.0571)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 50.6265 27.7686)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 50.6265 30.0571)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 52.915 27.7686)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 55.2036 25.4805)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 57.4922 23.1851)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 57.4922 20.8965)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 57.4922 19.7524)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 23.1479 0.282227)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 20.856 2.5708)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 20.856 0.282227)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 18.5679 2.5708)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 16.2759 4.85938)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 16.2759 2.5708)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 13.9873 4.85938)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 11.6987 7.14746)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 9.41016 9.44287)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 9.41016 11.7314)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 9.41016 14.02)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 25.4365 0.282227)" fill="currentColor" />
            <rect x="23.1479" y="32.3457" width="2.28956" height="2.28956" transform="rotate(180 23.1479 32.3457)" fill="currentColor" />
            <rect x="25.4365" y="32.3457" width="2.28956" height="2.28956" transform="rotate(180 25.4365 32.3457)" fill="currentColor" />
            <rect x="20.856" y="30.0571" width="2.28956" height="2.28956" transform="rotate(180 20.856 30.0571)" fill="currentColor" />
            <rect x="20.856" y="32.3457" width="2.28956" height="2.28956" transform="rotate(180 20.856 32.3457)" fill="currentColor" />
            <rect x="18.5679" y="30.0571" width="2.28956" height="2.28956" transform="rotate(180 18.5679 30.0571)" fill="currentColor" />
            <rect x="16.2759" y="27.7686" width="2.28956" height="2.28956" transform="rotate(180 16.2759 27.7686)" fill="currentColor" />
            <rect x="16.2759" y="30.0571" width="2.28956" height="2.28956" transform="rotate(180 16.2759 30.0571)" fill="currentColor" />
            <rect x="13.9873" y="27.7686" width="2.28956" height="2.28956" transform="rotate(180 13.9873 27.7686)" fill="currentColor" />
            <rect x="11.6987" y="25.4805" width="2.28956" height="2.28956" transform="rotate(180 11.6987 25.4805)" fill="currentColor" />
            <rect x="9.41016" y="23.1851" width="2.28956" height="2.28956" transform="rotate(180 9.41016 23.1851)" fill="currentColor" />
            <rect x="9.41016" y="20.8965" width="2.28956" height="2.28956" transform="rotate(180 9.41016 20.8965)" fill="currentColor" />
            <rect x="9.41016" y="18.6079" width="2.28956" height="2.28956" transform="rotate(180 9.41016 18.6079)" fill="currentColor" />
            <rect x="52.9175" y="2.58984" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="55.2061" y="2.58984" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="55.2061" y="4.87842" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="57.498" y="4.87842" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="59.7861" y="4.87842" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="59.7861" y="7.16699" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="62.0781" y="7.16699" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="62.0781" y="9.45508" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="64.3667" y="11.7505" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="64.3667" y="14.0391" width="2.28956" height="2.28956" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 52.9175 30.0581)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 55.2061 30.0581)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 55.2061 27.7695)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 57.498 27.7695)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 59.7861 27.7695)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 59.7861 25.481)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 62.0781 25.481)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 62.0781 23.1929)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 64.3667 20.8975)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 64.3667 18.6089)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 13.9849 2.58984)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 11.6963 2.58984)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 11.6963 4.87842)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 9.4043 4.87842)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 7.11621 4.87842)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 7.11621 7.16699)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 4.82422 7.16699)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 4.82422 9.45508)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 2.53564 11.7505)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(-1 0 0 1 2.53564 14.0391)" fill="currentColor" />
            <rect x="13.9849" y="30.0581" width="2.28956" height="2.28956" transform="rotate(180 13.9849 30.0581)" fill="currentColor" />
            <rect x="11.6963" y="30.0581" width="2.28956" height="2.28956" transform="rotate(180 11.6963 30.0581)" fill="currentColor" />
            <rect x="11.6963" y="27.7695" width="2.28956" height="2.28956" transform="rotate(180 11.6963 27.7695)" fill="currentColor" />
            <rect x="9.4043" y="27.7695" width="2.28956" height="2.28956" transform="rotate(180 9.4043 27.7695)" fill="currentColor" />
            <rect x="7.11621" y="27.7695" width="2.28956" height="2.28956" transform="rotate(180 7.11621 27.7695)" fill="currentColor" />
            <rect x="7.11621" y="25.481" width="2.28956" height="2.28956" transform="rotate(180 7.11621 25.481)" fill="currentColor" />
            <rect x="4.82422" y="25.481" width="2.28956" height="2.28956" transform="rotate(180 4.82422 25.481)" fill="currentColor" />
            <rect x="4.82422" y="23.1929" width="2.28956" height="2.28956" transform="rotate(180 4.82422 23.1929)" fill="currentColor" />
            <rect x="2.53564" y="20.8975" width="2.28956" height="2.28956" transform="rotate(180 2.53564 20.8975)" fill="currentColor" />
            <rect x="2.53564" y="18.6089" width="2.28956" height="2.28956" transform="rotate(180 2.53564 18.6089)" fill="currentColor" />
            <rect x="32.314" y="27.7534" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="32.314" y="23.1831" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="32.314" y="4.86182" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="32.314" y="0.284668" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="32.314" y="30.0483" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="32.314" y="25.4717" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="32.314" y="7.1499" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="32.314" y="2.57324" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="20.8662" y="15.1665" width="2.28956" height="2.28956" transform="rotate(90 20.8662 15.1665)" fill="currentColor" />
            <rect x="11.709" y="15.1665" width="2.28956" height="2.28956" transform="rotate(90 11.709 15.1665)" fill="currentColor" />
            <rect x="7.12842" y="15.1665" width="2.28956" height="2.28956" transform="rotate(90 7.12842 15.1665)" fill="currentColor" />
            <rect x="55.207" y="15.1665" width="2.28956" height="2.28956" transform="rotate(90 55.207 15.1665)" fill="currentColor" />
            <rect x="13.9971" y="15.1665" width="2.28956" height="2.28956" transform="rotate(90 13.9971 15.1665)" fill="currentColor" />
            <rect x="59.7871" y="12.8779" width="2.28956" height="2.28956" transform="rotate(90 59.7871 12.8779)" fill="currentColor" />
            <rect x="50.6299" y="15.1665" width="2.28956" height="2.28956" transform="rotate(90 50.6299 15.1665)" fill="currentColor" />
            <rect x="62.0757" y="15.1665" width="2.28956" height="2.28956" transform="rotate(90 62.0757 15.1665)" fill="currentColor" />
            <rect x="64.3677" y="15.1665" width="2.28956" height="2.28966" transform="rotate(90 64.3677 15.1665)" fill="currentColor" />
            <rect x="18.5776" y="15.1665" width="2.28956" height="2.28956" transform="rotate(90 18.5776 15.1665)" fill="currentColor" />
            <rect x="4.83984" y="15.1665" width="2.28956" height="2.28966" transform="rotate(90 4.83984 15.1665)" fill="currentColor" />
            <rect x="57.499" y="15.1665" width="2.28956" height="2.28956" transform="rotate(90 57.499 15.1665)" fill="currentColor" />
            <rect x="48.3413" y="15.1665" width="2.28956" height="2.28956" transform="rotate(90 48.3413 15.1665)" fill="currentColor" />
            <rect x="20.8594" y="25.4736" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="43.7544" y="25.4736" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="25.4399" y="23.1851" width="2.28956" height="2.28956" fill="currentColor" />
            <rect x="39.1738" y="23.1851" width="2.28956" height="2.28956" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 20.8594 7.15771)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 43.7544 7.15771)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 25.4399 9.44629)" fill="currentColor" />
            <rect width="2.28956" height="2.28956" transform="matrix(1 0 0 -1 39.1738 9.44629)" fill="currentColor" />
</svg>
    ),
    pumpkin: (props: IconProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M9.5 7.5c-1.5-2-3.5-2-5 0-1.5 2-1.5 6 0 8 1.5 2 3.5 2 5 0"/>
          <path d="M14.5 7.5c1.5-2 3.5-2 5 0 1.5 2 1.5 6 0 8-1.5 2-3.5 2-5 0"/>
          <path d="M9.5 7.5c-1 4 0 8 2.5 8s3.5-4 2.5-8"/>
          <path d="M12 3c-.5 1.5-.5 2.5 0 3.5"/>
        </svg>
    ),
};