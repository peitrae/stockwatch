import IIcon from '@/types/IIcon';

interface ILogoIcon extends IIcon {
	iconOnly?: boolean;
}

const LogoIcon: React.FC<ILogoIcon> = ({ className = '', iconOnly }) =>
	iconOnly ? (
		<>
			<svg
				height="inherit"
				viewBox="0 0 34 34"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={`icon logo-iconOnly ${className}`}
			>
				<rect
					width="34"
					height="34"
					rx="8"
					fill="url(#paintIconOnly0_linear)"
				/>
				<path
					d="M16.52 24.22C15.4133 24.22 14.3533 24.0867 13.34 23.82C12.3267 23.54 11.4933 23.1733 10.84 22.72L11.86 19.86C12.4733 20.2733 13.1933 20.6 14.02 20.84C14.8467 21.08 15.68 21.2 16.52 21.2C17.4 21.2 18.0133 21.0867 18.36 20.86C18.72 20.62 18.9 20.3267 18.9 19.98C18.9 19.6733 18.7733 19.4267 18.52 19.24C18.28 19.0533 17.8467 18.8933 17.22 18.76L14.88 18.26C12.3467 17.7133 11.08 16.3867 11.08 14.28C11.08 13.36 11.3267 12.5533 11.82 11.86C12.3267 11.1667 13.0267 10.6333 13.92 10.26C14.8133 9.87333 15.8533 9.68 17.04 9.68C18.0133 9.68 18.9333 9.82 19.8 10.1C20.68 10.3667 21.3933 10.7333 21.94 11.2L20.92 13.88C20.4133 13.5067 19.8267 13.22 19.16 13.02C18.4933 12.8067 17.7733 12.7 17 12.7C16.2533 12.7 15.68 12.8333 15.28 13.1C14.88 13.3533 14.68 13.6867 14.68 14.1C14.68 14.3933 14.8 14.6333 15.04 14.82C15.28 15.0067 15.7067 15.1667 16.32 15.3L18.64 15.8C21.2133 16.3467 22.5 17.64 22.5 19.68C22.5 20.6 22.2533 21.4 21.76 22.08C21.2667 22.76 20.5733 23.2867 19.68 23.66C18.7867 24.0333 17.7333 24.22 16.52 24.22Z"
					fill="white"
				/>
				<defs>
					<linearGradient
						id="paintIconOnly0_linear"
						x1="-3.5887e-07"
						y1="1.77083"
						x2="31.875"
						y2="34"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#1E5339" />
						<stop offset="0.555911" stopColor="#276A49" />
						<stop offset="1" stopColor="#2E7D55" />
					</linearGradient>
				</defs>
			</svg>
		</>
	) : (
		<>
			<svg
				height="inherit"
				viewBox="0 0 158 34"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={`icon logo-icon ${className}`}
			>
				<rect width="34" height="34" rx="8" fill="url(#paint0_linear)" />
				<path
					d="M16.52 24.22C15.4133 24.22 14.3533 24.0867 13.34 23.82C12.3267 23.54 11.4933 23.1733 10.84 22.72L11.86 19.86C12.4733 20.2733 13.1933 20.6 14.02 20.84C14.8467 21.08 15.68 21.2 16.52 21.2C17.4 21.2 18.0133 21.0867 18.36 20.86C18.72 20.62 18.9 20.3267 18.9 19.98C18.9 19.6733 18.7733 19.4267 18.52 19.24C18.28 19.0533 17.8467 18.8933 17.22 18.76L14.88 18.26C12.3467 17.7133 11.08 16.3867 11.08 14.28C11.08 13.36 11.3267 12.5533 11.82 11.86C12.3267 11.1667 13.0267 10.6333 13.92 10.26C14.8133 9.87333 15.8533 9.68 17.04 9.68C18.0133 9.68 18.9333 9.82 19.8 10.1C20.68 10.3667 21.3933 10.7333 21.94 11.2L20.92 13.88C20.4133 13.5067 19.8267 13.22 19.16 13.02C18.4933 12.8067 17.7733 12.7 17 12.7C16.2533 12.7 15.68 12.8333 15.28 13.1C14.88 13.3533 14.68 13.6867 14.68 14.1C14.68 14.3933 14.8 14.6333 15.04 14.82C15.28 15.0067 15.7067 15.1667 16.32 15.3L18.64 15.8C21.2133 16.3467 22.5 17.64 22.5 19.68C22.5 20.6 22.2533 21.4 21.76 22.08C21.2667 22.76 20.5733 23.2867 19.68 23.66C18.7867 24.0333 17.7333 24.22 16.52 24.22Z"
					fill="white"
				/>
				<path
					d="M46.58 23.68C45.5133 23.68 44.52 23.5667 43.6 23.34C42.6933 23.1 41.9467 22.7733 41.36 22.36C41.1333 22.1867 40.9667 22.0067 40.86 21.82C40.7667 21.6333 40.72 21.3933 40.72 21.1C40.72 20.7 40.84 20.3533 41.08 20.06C41.32 19.7667 41.6 19.62 41.92 19.62C42.0933 19.62 42.26 19.6467 42.42 19.7C42.58 19.7533 42.78 19.8533 43.02 20C43.5667 20.3067 44.1067 20.5267 44.64 20.66C45.1867 20.7933 45.8 20.86 46.48 20.86C47.2667 20.86 47.86 20.7467 48.26 20.52C48.6733 20.28 48.88 19.9333 48.88 19.48C48.88 19.1733 48.6867 18.9133 48.3 18.7C47.9267 18.4733 47.2067 18.2533 46.14 18.04C44.82 17.76 43.7867 17.4267 43.04 17.04C42.2933 16.6533 41.7667 16.2 41.46 15.68C41.1667 15.1467 41.02 14.5067 41.02 13.76C41.02 12.9067 41.2733 12.1333 41.78 11.44C42.2867 10.7467 42.98 10.2067 43.86 9.82C44.7533 9.42 45.7533 9.22 46.86 9.22C47.8333 9.22 48.7 9.32667 49.46 9.54C50.22 9.75333 50.9133 10.0867 51.54 10.54C51.78 10.7133 51.9467 10.9 52.04 11.1C52.1467 11.2867 52.2 11.52 52.2 11.8C52.2 12.2 52.08 12.5467 51.84 12.84C51.6133 13.1333 51.34 13.28 51.02 13.28C50.8467 13.28 50.6867 13.26 50.54 13.22C50.3933 13.1667 50.1867 13.06 49.92 12.9C49.8533 12.86 49.66 12.76 49.34 12.6C49.0333 12.4267 48.6667 12.2933 48.24 12.2C47.8267 12.0933 47.3733 12.04 46.88 12.04C46.2 12.04 45.6533 12.1733 45.24 12.44C44.8267 12.6933 44.62 13.0333 44.62 13.46C44.62 13.7133 44.6933 13.92 44.84 14.08C44.9867 14.24 45.26 14.4 45.66 14.56C46.06 14.7067 46.6533 14.86 47.44 15.02C48.72 15.3 49.7267 15.64 50.46 16.04C51.1933 16.4267 51.7133 16.88 52.02 17.4C52.3267 17.92 52.48 18.5333 52.48 19.24C52.48 20.12 52.2333 20.9 51.74 21.58C51.2467 22.2467 50.5533 22.7667 49.66 23.14C48.78 23.5 47.7533 23.68 46.58 23.68ZM59.9069 21.08C60.8002 21.1333 61.2469 21.5333 61.2469 22.28C61.2469 22.7467 61.0669 23.0933 60.7069 23.32C60.3469 23.5467 59.8335 23.64 59.1669 23.6L58.6069 23.56C57.4069 23.4667 56.4935 23.1067 55.8669 22.48C55.2535 21.84 54.9469 20.9533 54.9469 19.82V16.28H54.3669C53.3002 16.28 52.7669 15.84 52.7669 14.96C52.7669 14.0933 53.3002 13.66 54.3669 13.66H54.9469V12.36C54.9469 11.8533 55.1069 11.4533 55.4269 11.16C55.7469 10.8533 56.1802 10.7 56.7269 10.7C57.2735 10.7 57.7069 10.8533 58.0269 11.16C58.3469 11.4533 58.5069 11.8533 58.5069 12.36V13.66H59.6069C60.6735 13.66 61.2069 14.0933 61.2069 14.96C61.2069 15.84 60.6735 16.28 59.6069 16.28H58.5069V20.12C58.5069 20.3733 58.5802 20.5867 58.7269 20.76C58.8869 20.9333 59.0869 21.0267 59.3269 21.04L59.9069 21.08ZM67.1523 23.66C66.0723 23.66 65.119 23.4533 64.2923 23.04C63.479 22.6133 62.8457 22.0133 62.3923 21.24C61.9523 20.4667 61.7323 19.56 61.7323 18.52C61.7323 17.48 61.9523 16.58 62.3923 15.82C62.8457 15.0467 63.479 14.4533 64.2923 14.04C65.1057 13.6267 66.059 13.42 67.1523 13.42C68.2457 13.42 69.199 13.6267 70.0123 14.04C70.8257 14.4533 71.4523 15.0467 71.8923 15.82C72.3457 16.58 72.5723 17.48 72.5723 18.52C72.5723 19.56 72.3457 20.4667 71.8923 21.24C71.4523 22.0133 70.8257 22.6133 70.0123 23.04C69.199 23.4533 68.2457 23.66 67.1523 23.66ZM67.1523 21C68.419 21 69.0523 20.1733 69.0523 18.52C69.0523 16.8667 68.419 16.04 67.1523 16.04C65.8857 16.04 65.2523 16.8667 65.2523 18.52C65.2523 20.1733 65.8857 21 67.1523 21ZM78.9245 23.66C77.3245 23.66 76.0579 23.2067 75.1245 22.3C74.1912 21.3933 73.7245 20.16 73.7245 18.6C73.7245 17.5733 73.9512 16.6667 74.4045 15.88C74.8579 15.0933 75.4912 14.4867 76.3045 14.06C77.1312 13.6333 78.0712 13.42 79.1245 13.42C79.6845 13.42 80.2445 13.4933 80.8045 13.64C81.3645 13.7867 81.8579 13.9933 82.2845 14.26C82.6979 14.5133 82.9045 14.9 82.9045 15.42C82.9045 15.8333 82.8045 16.1733 82.6045 16.44C82.4179 16.6933 82.1712 16.82 81.8645 16.82C81.6645 16.82 81.4712 16.7933 81.2845 16.74C81.0979 16.6733 80.8912 16.58 80.6645 16.46C80.3979 16.34 80.1712 16.2533 79.9845 16.2C79.7979 16.1333 79.5912 16.1 79.3645 16.1C78.0445 16.1 77.3845 16.9067 77.3845 18.52C77.3845 19.32 77.5512 19.9333 77.8845 20.36C78.2312 20.7733 78.7245 20.98 79.3645 20.98C79.5912 20.98 79.7979 20.9533 79.9845 20.9C80.1845 20.8333 80.4045 20.74 80.6445 20.62C80.9112 20.5 81.1245 20.4133 81.2845 20.36C81.4579 20.2933 81.6445 20.26 81.8445 20.26C82.1512 20.26 82.3979 20.3933 82.5845 20.66C82.7845 20.9133 82.8845 21.2467 82.8845 21.66C82.8845 21.9133 82.8312 22.1467 82.7245 22.36C82.6179 22.56 82.4712 22.7133 82.2845 22.82C81.3645 23.38 80.2445 23.66 78.9245 23.66ZM94.0045 20.74C94.3512 21.0733 94.5245 21.46 94.5245 21.9C94.5245 22.34 94.3645 22.7333 94.0445 23.08C93.7379 23.4267 93.3645 23.6 92.9245 23.6C92.5512 23.6 92.1779 23.4333 91.8045 23.1L87.7445 19.24V21.94C87.7445 22.4867 87.5712 22.9 87.2245 23.18C86.8912 23.46 86.4712 23.6 85.9645 23.6C85.4579 23.6 85.0312 23.46 84.6845 23.18C84.3512 22.9 84.1845 22.4867 84.1845 21.94V10.96C84.1845 10.4133 84.3512 10 84.6845 9.72C85.0312 9.44 85.4579 9.3 85.9645 9.3C86.4712 9.3 86.8912 9.44 87.2245 9.72C87.5712 10 87.7445 10.4133 87.7445 10.96V17.74L91.4445 13.98C91.7779 13.6333 92.1645 13.46 92.6045 13.46C93.0312 13.46 93.4045 13.6267 93.7245 13.96C94.0579 14.28 94.2245 14.6467 94.2245 15.06C94.2245 15.4733 94.0512 15.8533 93.7045 16.2L91.5245 18.36L94.0045 20.74ZM113.286 10.42C113.419 10.0467 113.633 9.76 113.926 9.56C114.233 9.36 114.566 9.26 114.926 9.26C115.366 9.26 115.746 9.4 116.066 9.68C116.399 9.96 116.566 10.34 116.566 10.82C116.566 11.0333 116.513 11.3 116.406 11.62L112.386 22.5C112.253 22.8733 112.006 23.1667 111.646 23.38C111.299 23.58 110.913 23.68 110.486 23.68C110.059 23.68 109.673 23.58 109.326 23.38C108.979 23.1667 108.739 22.8733 108.606 22.5L106.006 15.08L103.286 22.5C103.139 22.8733 102.893 23.1667 102.546 23.38C102.199 23.58 101.819 23.68 101.406 23.68C100.979 23.68 100.593 23.58 100.246 23.38C99.8994 23.1667 99.6594 22.8733 99.5261 22.5L95.4861 11.62C95.3928 11.3533 95.3461 11.1 95.3461 10.86C95.3461 10.3667 95.5194 9.98 95.8661 9.7C96.2261 9.40667 96.6394 9.26 97.1061 9.26C97.4794 9.26 97.8194 9.36 98.1261 9.56C98.4461 9.74667 98.6728 10.0333 98.8061 10.42L101.546 18.3L104.446 10.42C104.579 10.0467 104.793 9.76 105.086 9.56C105.393 9.36 105.726 9.26 106.086 9.26C106.446 9.26 106.773 9.36 107.066 9.56C107.359 9.76 107.573 10.0533 107.706 10.44L110.426 18.48L113.286 10.42ZM121.577 13.42C123.097 13.42 124.217 13.7867 124.937 14.52C125.67 15.24 126.037 16.34 126.037 17.82V22C126.037 22.5067 125.884 22.9067 125.577 23.2C125.284 23.48 124.87 23.62 124.337 23.62C123.87 23.62 123.484 23.4867 123.177 23.22C122.884 22.9533 122.724 22.5933 122.697 22.14C122.51 22.62 122.197 22.9933 121.757 23.26C121.317 23.5267 120.79 23.66 120.177 23.66C119.497 23.66 118.884 23.5267 118.337 23.26C117.79 22.98 117.357 22.6 117.037 22.12C116.73 21.6267 116.577 21.0733 116.577 20.46C116.577 19.7533 116.757 19.1933 117.117 18.78C117.49 18.3533 118.077 18.0467 118.877 17.86C119.677 17.6733 120.757 17.58 122.117 17.58H122.657V17.34C122.657 16.8733 122.55 16.54 122.337 16.34C122.124 16.1267 121.764 16.02 121.257 16.02C120.71 16.02 119.91 16.2067 118.857 16.58C118.55 16.6867 118.29 16.74 118.077 16.74C117.744 16.74 117.477 16.62 117.277 16.38C117.077 16.14 116.977 15.8267 116.977 15.44C116.977 15.1467 117.037 14.9067 117.157 14.72C117.277 14.5333 117.47 14.3667 117.737 14.22C118.204 13.98 118.79 13.7867 119.497 13.64C120.204 13.4933 120.897 13.42 121.577 13.42ZM121.017 21.28C121.497 21.28 121.89 21.1133 122.197 20.78C122.504 20.4333 122.657 19.9933 122.657 19.46V19.22H122.337C121.484 19.22 120.877 19.3 120.517 19.46C120.157 19.6067 119.977 19.86 119.977 20.22C119.977 20.5267 120.07 20.78 120.257 20.98C120.457 21.18 120.71 21.28 121.017 21.28ZM133.852 21.08C134.746 21.1333 135.192 21.5333 135.192 22.28C135.192 22.7467 135.012 23.0933 134.652 23.32C134.292 23.5467 133.779 23.64 133.112 23.6L132.552 23.56C131.352 23.4667 130.439 23.1067 129.812 22.48C129.199 21.84 128.892 20.9533 128.892 19.82V16.28H128.312C127.246 16.28 126.712 15.84 126.712 14.96C126.712 14.0933 127.246 13.66 128.312 13.66H128.892V12.36C128.892 11.8533 129.052 11.4533 129.372 11.16C129.692 10.8533 130.126 10.7 130.672 10.7C131.219 10.7 131.652 10.8533 131.972 11.16C132.292 11.4533 132.452 11.8533 132.452 12.36V13.66H133.552C134.619 13.66 135.152 14.0933 135.152 14.96C135.152 15.84 134.619 16.28 133.552 16.28H132.452V20.12C132.452 20.3733 132.526 20.5867 132.672 20.76C132.832 20.9333 133.032 21.0267 133.272 21.04L133.852 21.08ZM140.878 23.66C139.278 23.66 138.011 23.2067 137.078 22.3C136.144 21.3933 135.678 20.16 135.678 18.6C135.678 17.5733 135.904 16.6667 136.358 15.88C136.811 15.0933 137.444 14.4867 138.258 14.06C139.084 13.6333 140.024 13.42 141.078 13.42C141.638 13.42 142.198 13.4933 142.758 13.64C143.318 13.7867 143.811 13.9933 144.238 14.26C144.651 14.5133 144.858 14.9 144.858 15.42C144.858 15.8333 144.758 16.1733 144.558 16.44C144.371 16.6933 144.124 16.82 143.818 16.82C143.618 16.82 143.424 16.7933 143.238 16.74C143.051 16.6733 142.844 16.58 142.618 16.46C142.351 16.34 142.124 16.2533 141.938 16.2C141.751 16.1333 141.544 16.1 141.318 16.1C139.998 16.1 139.338 16.9067 139.338 18.52C139.338 19.32 139.504 19.9333 139.838 20.36C140.184 20.7733 140.678 20.98 141.318 20.98C141.544 20.98 141.751 20.9533 141.938 20.9C142.138 20.8333 142.358 20.74 142.598 20.62C142.864 20.5 143.078 20.4133 143.238 20.36C143.411 20.2933 143.598 20.26 143.798 20.26C144.104 20.26 144.351 20.3933 144.538 20.66C144.738 20.9133 144.838 21.2467 144.838 21.66C144.838 21.9133 144.784 22.1467 144.678 22.36C144.571 22.56 144.424 22.7133 144.238 22.82C143.318 23.38 142.198 23.66 140.878 23.66ZM152.838 13.42C153.984 13.42 154.838 13.7733 155.398 14.48C155.958 15.1733 156.238 16.2333 156.238 17.66V21.98C156.238 22.4867 156.078 22.8867 155.758 23.18C155.438 23.4733 155.004 23.62 154.458 23.62C153.911 23.62 153.478 23.4733 153.158 23.18C152.838 22.8867 152.678 22.4867 152.678 21.98V17.58C152.678 16.62 152.264 16.14 151.438 16.14C150.904 16.14 150.478 16.3133 150.158 16.66C149.851 16.9933 149.698 17.4467 149.698 18.02V21.98C149.698 22.4867 149.538 22.8867 149.218 23.18C148.898 23.4733 148.464 23.62 147.918 23.62C147.371 23.62 146.938 23.4733 146.618 23.18C146.298 22.8867 146.138 22.4867 146.138 21.98V10.9C146.138 10.4333 146.304 10.0533 146.638 9.76C146.971 9.45333 147.411 9.3 147.958 9.3C148.478 9.3 148.898 9.44 149.218 9.72C149.538 10 149.698 10.3733 149.698 10.84V14.84C150.058 14.3733 150.504 14.02 151.038 13.78C151.571 13.54 152.171 13.42 152.838 13.42Z"
					fill="url(#paint1_linear)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear"
						x1="-3.5887e-07"
						y1="1.77083"
						x2="31.875"
						y2="34"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#1E5339" />
						<stop offset="0.555911" stopColor="#276A49" />
						<stop offset="1" stopColor="#2E7D55" />
					</linearGradient>
					<linearGradient
						id="paint1_linear"
						x1="40"
						y1="3.5"
						x2="157.717"
						y2="31.6805"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#1E5339" />
						<stop offset="1" stopColor="#2E7D55" />
					</linearGradient>
				</defs>
			</svg>
		</>
	);

export default LogoIcon;
