/**
 * Yi Sang
 * Made with the Valenced theme studio. Goes in the plugin template's `themes/` folder next to manifest.json.
 * Every base is themed.
 */

/// <reference types="@valenced/themes-api" />

import type { ThemeColors } from '@valenced/themes-api/types'

// @studio-appearance {}


const colors: ThemeColors = {
	semantic: {
		dark: {
			BACKGROUND_BASE_LOWEST: '#0b120f', // colours the outer app canvas behind the server rail and...
			BACKGROUND_BRAND: '#19ab72', // colours the selected Messages button in the server sidebar
			CHANNEL_BACKGROUND_DEFAULT: '#19ab72', // colours the message-list background
		},
		darker: {
			CHANNEL_BACKGROUND_DEFAULT: '#0b120f', // colours the message-list background
		},
		light: {
			BACKGROUND_BRAND: '#c8dcd2', // colours the selected Messages button in the server sidebar
		},
		midnight: {
			BACKGROUND_BASE_LOWEST: '#0b120f', // colours the outer app canvas behind the server rail and...
			BACKGROUND_BRAND: '#0cc97f', // colours the selected Messages button in the server sidebar
			BACKGROUND_FEEDBACK_NOTIFICATION: '#ff0000', // fills direct-mention count pills and the notification...
			BACKGROUND_MOD_STRONG: '#97979f', // fills lower-priority mention count pills and the...
			BORDER_SUBTLE: '#0b120f', // colours Settings row separators, the Inbox header...
			CARD_MUTED_BG: '#12211b', // colours grouped Settings and action-sheet rows, and...
			CHANNEL_BACKGROUND_DEFAULT: '#0b130f', // colours the message-list background
			CHANNEL_ICON: '#c8dcd2', // colours channel icons for read channels and Channels & Roles
			CONTROL_PRIMARY_BACKGROUND_DEFAULT: '#19ab72', // colours the fill of primary buttons
			MENTION_FOREGROUND: '#4cd49f', // colours the text inside a rendered mention
			MOBILE_ACTIONSHEET_BACKGROUND: '#0b120f', // colours the Settings hub, Password page header, channel...
			MOBILE_GUILDBAR_ICON_BACKGROUND_DEFAULT: '#19ab72', // colours unselected server tiles in the rail
			MOBILE_GUILDBAR_ICON_DEFAULT: '#c8dcd2', // colours the Direct Messages and Favourites rail glyphs
			MOBILE_TOAST_BACKGROUND_DEFAULT: '#0b120f', // colours the native New channel badge surface
			PANEL_BG: '#0b120f', // colours the server channel-list panel
			REDESIGN_CHANNEL_NAME_MUTED_TEXT: '#b8d3c5', // colours read channel names and Channels & Roles text
			REDESIGN_CHANNEL_NAME_TEXT: '#c8dcd2', // colours unread channel names in the server list
			SWITCH_BACKGROUND_SELECTED_DEFAULT: '#19ab72', // colours the track fill of switches that are on
			TABLEROW_ICON_COLOR_DEFAULT: '#4cd49f', // colours the leading icons in Settings rows
			TEXT_BRAND: '#19ab72', // colours the improved update heading and divider
			TEXT_DEFAULT: '#c8dcd2', // colours the Boost Goal text, count and chevron
			TEXT_MUTED: '#c8dcd2', // colours trailing Settings details, the chat composer...
			TEXT_STRONG: '#c8dcd2', // colours primary Settings row labels
			WHITE: '#c8dcd2', // colours selected server initials and the digits on...
		},
	},
	raw: {
		BLUE_NEW_45: '#19ab72',
	},
}

export default plugin({
	// Registering in preInit means a picked theme is ready before Discord draws anything
	preInit({ themes }) {
		themes.registerGroup('my-themes', {
			name: 'My Themes',
		})

		themes.registerTheme('my-themes', 'yi-sang', {
			name: 'Yi Sang',
			description: '',
			getColors: () => colors,
		})
	},
})
