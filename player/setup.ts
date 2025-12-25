import TrackPlayer, { AppKilledPlaybackBehavior, Capability } from 'react-native-track-player';

let isPlayerInitialized = false;

export async function initPlayer() {
  if (isPlayerInitialized) return;

  await TrackPlayer.setupPlayer({ maxCacheSize: 1024 * 10 });

	await TrackPlayer.updateOptions({
		android: {
        appKilledPlaybackBehavior: AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification
    },
		capabilities: [
			Capability.Play,
			Capability.Pause,
			Capability.SkipToNext,
			Capability.SkipToPrevious,
			Capability.SeekTo,
		],
		notificationCapabilities: [
			Capability.Play,
			Capability.Pause,
			Capability.SkipToNext,
			Capability.SkipToPrevious,
		]
  });

  await TrackPlayer.setVolume(1.0);

  isPlayerInitialized = true;
}