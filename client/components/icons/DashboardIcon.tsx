import { IIconMultiVariant } from '@/types/IIcon';

const DashboardIcon: React.FC<IIconMultiVariant> = ({
	className = '',
	variant = 'solid',
}) =>
	variant === 'solid' ? (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="inherit"
			xmlns="http://www.w3.org/2000/svg"
			className={`icon dashboard-icon dashboard-icon--solid ${className}`}
		>
			<path
				d="M7.10411 13.7638C8.79613 13.7638 10.1522 15.1331 10.1522 16.8371V20.928C10.1522 22.62 8.79613 24 7.10411 24H3.04805C1.36802 24 0 22.62 0 20.928V16.8371C0 15.1331 1.36802 13.7638 3.04805 13.7638H7.10411ZM20.9524 13.7638C22.6325 13.7638 24.0005 15.1331 24.0005 16.8371V20.928C24.0005 22.62 22.6325 24 20.9524 24H16.8964C15.2043 24 13.8483 22.62 13.8483 20.928V16.8371C13.8483 15.1331 15.2043 13.7638 16.8964 13.7638H20.9524ZM7.10411 0C8.79613 0 10.1522 1.38002 10.1522 3.07325V7.16411C10.1522 8.86813 8.79613 10.2362 7.10411 10.2362H3.04805C1.36802 10.2362 0 8.86813 0 7.16411V3.07325C0 1.38002 1.36802 0 3.04805 0H7.10411ZM20.9524 0C22.6325 0 24.0005 1.38002 24.0005 3.07325V7.16411C24.0005 8.86813 22.6325 10.2362 20.9524 10.2362H16.8964C15.2043 10.2362 13.8483 8.86813 13.8483 7.16411V3.07325C13.8483 1.38002 15.2043 0 16.8964 0H20.9524Z"
				fill="inherit"
			/>
		</svg>
	) : (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="inherit"
			xmlns="http://www.w3.org/2000/svg"
			className={`icon dashboard-icon dashboard-icon--oulined ${className}`}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.23077 13.5385C10.2388 13.5385 10.4615 15.2369 10.4615 18.7692C10.4615 20.5391 10.4615 21.7982 9.71815 22.72C8.86277 23.7822 7.30585 24 5.23077 24C3.15569 24 1.59877 23.7822 0.743385 22.72C0 21.7982 0 20.5403 0 18.8L0.923077 18.7692H0C0 15.2369 0.22277 13.5385 5.23077 13.5385ZM18.7692 13.5385C23.7772 13.5385 24 15.2369 24 18.7692C24 20.5391 24 21.7982 23.2566 22.72C22.4012 23.7822 20.8443 24 18.7692 24C16.6942 24 15.1372 23.7822 14.2818 22.72C13.5385 21.7982 13.5385 20.5403 13.5385 18.8L14.4615 18.7692H13.5385C13.5385 15.2369 13.7612 13.5385 18.7692 13.5385ZM5.48451 15.3852L5.23077 15.3846C2.01972 15.3846 1.85505 15.615 1.84661 18.3102L1.84713 19.3602C1.85296 20.4322 1.8938 21.2065 2.17969 21.5631C2.50585 21.9668 3.47446 22.1538 5.23077 22.1538C6.98708 22.1538 7.95569 21.9655 8.28185 21.5618C8.61539 21.1471 8.61539 20.1625 8.61539 18.7988C8.61539 15.7216 8.61539 15.3997 5.48451 15.3852ZM19.023 15.3852L18.7692 15.3846C15.5582 15.3846 15.3935 15.615 15.3851 18.3102L15.3856 19.3602C15.3914 20.4322 15.4323 21.2065 15.7182 21.5631C16.0443 21.9668 17.0129 22.1538 18.7692 22.1538C20.5255 22.1538 21.4942 21.9655 21.8203 21.5618C22.1538 21.1471 22.1538 20.1625 22.1538 18.7988C22.1538 15.7216 22.1538 15.3997 19.023 15.3852ZM5.23077 0C10.2388 0 10.4615 1.69846 10.4615 5.23077C10.4615 7.00062 10.4615 8.25969 9.71815 9.18154C8.86277 10.2437 7.30585 10.4615 5.23077 10.4615C3.15569 10.4615 1.59877 10.2437 0.743385 9.18154C0 8.25969 0 7.00185 0 5.26154L0.923077 5.23077H0C0 1.69846 0.22277 0 5.23077 0ZM18.7692 0C23.7772 0 24 1.69846 24 5.23077C24 7.00062 24 8.25969 23.2566 9.18154C22.4012 10.2437 20.8443 10.4615 18.7692 10.4615C16.6942 10.4615 15.1372 10.2437 14.2818 9.18154C13.5385 8.25969 13.5385 7.00185 13.5385 5.26154L14.4615 5.23077H13.5385C13.5385 1.69846 13.7612 0 18.7692 0ZM5.48451 1.8467L5.23077 1.84615C2.01972 1.84615 1.85505 2.07657 1.84661 4.77175L1.84713 5.82176C1.85296 6.89371 1.8938 7.66804 2.17969 8.02462C2.50585 8.42831 3.47446 8.61539 5.23077 8.61539C6.98708 8.61539 7.95569 8.42708 8.28185 8.02339C8.61539 7.60862 8.61539 6.624 8.61539 5.26031C8.61539 2.18313 8.61539 1.86119 5.48451 1.8467ZM19.023 1.8467L18.7692 1.84615C15.5582 1.84615 15.3935 2.07657 15.3851 4.77175L15.3856 5.82176C15.3914 6.89371 15.4323 7.66804 15.7182 8.02462C16.0443 8.42831 17.0129 8.61539 18.7692 8.61539C20.5255 8.61539 21.4942 8.42708 21.8203 8.02339C22.1538 7.60862 22.1538 6.624 22.1538 5.26031C22.1538 2.18313 22.1538 1.86119 19.023 1.8467Z"
				fill="inherit"
			/>
		</svg>
	);

export default DashboardIcon;
