// import React from 'react';

// const ThemeContext = React.createContext();

// export default ThemeContext;
import React, { createContext, useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { Appearance, AppearanceProvider } from 'react-native-appearance'
import lightTheme from './light'
import darkTheme from './dark'
const defaultMode = "light"

export const ThemeContext = createContext({
	mode: defaultMode,
	setMode: mode => console.log(mode)
})

// export const useTheme = () => React.useContext(ThemeContext)


const ManageThemeProvider = ({ children, theme }) => {
	const [themeState, setThemeState] = useState(defaultMode)
	const setMode = mode => {
		setThemeState(mode)
	}
	useEffect(() => {
		const subscription = Appearance.addChangeListener(({ colorScheme }) => {
			setThemeState(colorScheme)
		})
		return () => subscription.remove()
	}, [])
	return (
		<ThemeContext.Provider value={Object.assign({ mode: themeState, setMode },
			theme, { colors: themeState === 'dark' ? darkTheme.theme : lightTheme.theme })}>
			<ThemeProvider
				theme={{}}>
				<>
					<StatusBar
						backgroundColor={themeState === 'dark' ?
							darkTheme.theme.statusBarColor : lightTheme.theme.statusBarColor
						}
						barStyle={themeState === 'dark' ? 'light-content' : 'dark-content'}
					/>
					{children}
				</>
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}

const ThemeManager = ({ children, theme }) => (
	<AppearanceProvider>
		<ManageThemeProvider theme={theme}>{children}</ManageThemeProvider>
	</AppearanceProvider>
)
export default ThemeManager