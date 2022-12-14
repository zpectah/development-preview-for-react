import React from 'react';

interface ErrorBoundaryProps {
	children: React.ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null,
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {

	public state: ErrorBoundaryState = {
		hasError: false,
		error: null,
	};

	public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return {
			hasError: true,
			error,
		};
	}

	public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}

	public render() {
		if (this.state.hasError) {
			return (
				<div
					style={{
						// width: '100%',
						// height: '100vh',
						// minHeight: '500px',
						// margin: 0,
						// padding: 0,
						// display: 'flex',
						// alignItems: 'center',
						// justifyContent: 'center',
						// flexDirection: 'column',
						// fontFamily: FONT_FAMILY_ROOT,
						// fontWeight: 400,
						// fontSize: '1rem',
						// backgroundColor: palette.light,
						// color: palette.dark,
					}}
				>
					<div
						style={{
							// width: '100%',
							// height: 'auto',
							// display: 'flex',
							// alignItems: 'center',
							// justifyContent: 'center',
							// flexDirection: 'column',
							// flex: 'auto',
							// gap: '1rem',
							// textAlign: 'center',
						}}
					>
						<h1
							style={{
								fontSize: '2.25rem',
							}}
						>
							Application Error
						</h1>
						<p>
							We're sorry, but unfortunately there was a problem with the app. You can try reloading the page or clearing the browser cache. If problems persist, contact your administrator.
							<br />
							<a
								// href={routes.Dashboard.path as string}
								// style={{
								// 	margin: '1rem .5rem',
								// 	padding: '.5rem .75rem',
								// 	display: 'inline-flex',
								// 	alignItems: 'center',
								// 	justifyContent: 'center',
								// 	gap: '.5rem',
								// 	textAlign: 'center',
								// 	whiteSpace: 'nowrap',
								// 	fontWeight: 700,
								// 	textDecoration: 'none',
								// 	backgroundColor: palette.primary,
								// 	color: palette.light,
								// 	borderRadius: '.125rem',
								// 	border: 0,
								// }}
							>
								Return to dashboard
							</a>
						</p>
						{this.state.error && (
							<div
								// style={{
								// 	padding: '.75rem',
								// 	overflow: 'scroll',
								// 	fontSize: '.85rem',
								// 	backgroundColor: 'rgba(200,200,200,.5)',
								// 	color: palette.primary,
								// }}
							>
									<pre>
										<code>
											{JSON.stringify(this.state.error, null, 2)}
										</code>
									</pre>
							</div>
						)}
					</div>
				</div>
			);
		}

		return this.props.children;
	}

}

export default ErrorBoundary;
