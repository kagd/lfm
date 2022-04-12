declare type LooksLikeObject = {
  [key: string]: any;
}

declare type User = {
  id: number;
  name: string;
  username: string;
  vorname: string;
  shortname: string;
  nachname: string;
  steamid: number;
  avatar: string;
  email: string;
  email_verified_at: string;
  admin: number;
  created_at: string;
  updated_at: string;
  discord_id: number;
  profile_extras: null;
  origin: string;
  c_rating: number;
  cc_rating: number;
  twitch_channel: string;
  is_tv_broadcaster: number;
  youtube_channel: string;
  license: string;
  safety_rating: number;
  division: number;
  valid_license: number;
  darkmode: number;
  deleted: boolean;
  isAdmin: boolean;
  isReko: boolean;
  lastCars: {
    GT3: number;
    GT4: number;
    CUP: number;
    TCX: number;
  }
}

declare type Week = {
  from: string; // date
  to: string; // date
  track: Track;
  races: []
}

declare type Track = {
  track_id: number;
  track_name: string;
  track_year: number;
  acc_track_name: string; // track key
  thumbnail: string;
  country: string;
  turns: number;
  km: number;
  track_guide_video: string;
  turn_factor: string; // number
  city: string
  openweather_city_id: number;
  map: string;
}

declare type Session = {
  hourOfDay: number;
  dayOfWeekend: number;
  timeMultiplier: number;
  sessionType: string;
  sessionDurationMinutes: number;
};

declare type ServerSettings = {
  server_settings: {
    event: {
      file: string;
      data: {
        track: string;
        preRaceWaitingTimeSeconds: number;
        postRaceSeconds: number;
        sessionOverTimeSeconds: number;
        ambientTemp: number;
        cloudLevel: number;
        rain: number;
        weatherRandomness: number;
        simracerWeatherConditions: number;
        isFixedConditionQualification: number;
        sessions: Session[];
        configVersion: number;
      }
    },
    assistRules: {
      file: assistRules,
      data: {
        disableIdealLine: number;
        disableAutosteer: number;
        stabilityControlLevelMax: number;
        disableAutoPitLimiter: number;
        disableAutoGear: number;
        disableAutoClutch: number;
        disableAutoEngineStart: number;
        disableAutoWiper: number;
        disableAutoLights: number;
      }
    },
    eventRules: {
      file: string;
      data: {
        qualifyStandingType: number;
        pitWindowLengthSec: number;
        driverStintTimeSec: number;
        mandatoryPitstopCount: number;
        maxTotalDrivingTime: number;
        maxDriversCount: number;
        tyreSetCount: number;
        isRefuellingAllowedInRace: boolean;
        isRefuellingTimeFixed: boolean;
        isMandatoryPitstopRefuellingRequired: boolean;
        isMandatoryPitstopTyreChangeRequired: boolean;
        isMandatoryPitstopSwapDriverRequired: boolean;
      }
    },
    settings: {
      file: string;
      data: {
        serverName: string;
        password: string;
        spectatorPassword: string;
        centralEntryListPath: string;
        carGroup: string;
        trackMedalsRequirement: number;
        safetyRatingRequirement: number;
        racecraftRatingRequirement: number;
        maxCarSlots: number;
        isRaceLocked: number;
        isLockedPrepPhase: number;
        shortFormationLap: number;
        dumpLeaderboards: number;
        dumpEntryList: number;
        randomizeTrackWhenEmpty: number;
        allowAutoDQ: number;
        formationLapType: number;
        configVersion: number;
      }
    }
  }
}

declare type RaceEvent = {
  race_id: number;
  event_id: number;
  track: Track;
  race_date: string;
  logfile: string;
  server_settings: ServerSettings;
  live_video: string;
  vod_link: string;
  livetiming: string;
  closed: number;
  season_week: number;
  session_running: number;
  sof: number;
  session_broadcaster: number;
  splitted_race: number;
  split2_session_running: number;
  split3_session_running: number;
  split4_session_running: number;
  split5_session_running: number;
  split6_session_running: number;
  split7_session_running: number;
  split8_session_running: number;
  split9_session_running: number;
  split10_session_running: number;
  split2_sof: number;
  split3_sof: number;
  split4_sof: number;
  split5_sof: number;
  split6_sof: number;
  split7_sof: number;
  split8_sof: number;
  split9_sof: number;
  split10_sof: number;
  split_data: string; // {\splits\:2,\divers_per_split\:28,\driver_count\:56},
  team_race_settings: string;
  event_test_race: number;
  extra_qualifying_day: number;
  qualifying_format: string;
  qualifying_date: null,
  qualifying_settings: null,
  reverse_grid_race_id: null,
  reverse_grid_settings: string;
  points_override: string;
  split1_pid: number;
  split2_pid: number;
  split3_pid: number;
  split4_pid: number;
  split5_pid: number;
  split6_pid: number;
  split7_pid: number;
  split8_pid: number;
  split9_pid: number;
  split10_pid: number;
  real_weather: number;
  event_name: string;
  event_type: string;
  start_date: string;
  end_date: string;
  slots: number;
  entrylist: string;
  thumbnail: string;
  url_code: string;
  standings: string;
  game_server: 48,
  settings: RaceEventSettings;
  broadcasting_settings: string; //{\broadcasting\: {\layout_pack\: 1, \results_scroll_speed\: 25000, \standings_scroll_speed\: 24000, \overlay_background_picture\: \overlay.png\, \starting_grid_scroll_speed\: 10000, \qualifying_results_scroll_speed\: 25000}},
  rules_de: string;
  rules_en: string;
  information_de: string;
  information_en: string;
  caster: string; // number
  reko: string; //[1, 46],
  season_id: number;
  elo_active: number;
  car_pics: number;
  mini_thumnbnail: string;
  chat_group: number;
  max_split_size: number;
  split_threshold: number;
  splits_active: number;
  gameserver_split2: number;
  gameserver_split3: number;
  gameserver_split4: number;
  gameserver_split5: number;
  gameserver_split6: number;
  gameserver_split7: number;
  gameserver_split8: number;
  gameserver_split9: number;
  gameserver_split10: number;
  team_event: number;
  minimum_elo: number;
  minimum_sr: string; // number
  maximum_sr: number;
  min_license: string;
  team_min_drivers: number;
  team_max_drivers: number;
  signup_start: string; //date 
  signup_stop: string; //date 
  full_custom_liveries: number;
  spotterguide_screenshot_upload: number;
  live_stewarding: number;
  k_factor: number;
  sr_threshold_factor: string; // number
  bop_active: number;
  bop_type: null,
  bop_settings: null,
  sponsor_big: string;
  sponsor_link: string;
  community: number;
  registered: number;
  twitch: boolean;
  youtube: boolean;
  signupCloses: string; //date
  signOutCloses: string; // date
  isLive: number;
}

declare type Season = {
  season_id: number;
  season_name: string;
  season_start: string; // date
  season_closed: number;
  rating_active: number;
  minimum_drivers_for_official: number;
  weeks: number;
  drop_weeks: number;
  created_at: null,
  updated_at: null,
  events: SeasonEvent[];
}

declare type SeasonEvent = RaceEvent & {
  upcoming: RaceEvent[];
}

declare type Car = {
  car_id: number;
  car_name: string;
  class: string;
  server_value: number;
  year: number;
}

declare type RaceEventCarClass = {
  class: string;
  point_system: number[];
  cup_classes_active: number;
}

declare type RaceEventSettings = {
  championship_settings: {
    teams: number;
    car_classes: RaceEventCarClass[]
  },
  discord_penalty_webhook: string;
  discord_reporting_channel_webhook: string;
  season_event_settings: {
    car_class: string;
    first_slot: number;
    daily_races: number;
    races_every: number;
    week_schedule: string[];
    slots_per_race: number;
    standard_points_sof: number;
    default_server_settings: {
      race: {
        day: number;
        hour: number[];
        length: number;
        pre_race_waiting_time: number;
      },
      weather: {
        rain: number;
        clouds: number;
        randomness: number;
        average_temperature: number;
      },
      practice: {
        day: number;
        hour: number;
        length: number;
      },
      qualifying: {
        day: number;
        hour: number[],
        length: number;
      },
      pitstop_mandatory: number;
      refueling_allowed: number;
      refueling_mandatory: number;
      refueling_time_fixed: number;
      tire_change_mandatory: number;
      formation_lap_time: number;
      short_formation_lap: number;
    }
  }
}

declare type Registration = {
  race_id: number;
  signedUp: {
    success: boolean;
    message: string;
    car_model: number;
    car: string;
    split: 1;
  };
  car: string;
  car_model: number;
  message: string;
  split: number;
  success: boolean;
  slots: number;
}

declare type PastEvent = {
  race_id: number;
  track_name: string;
  race_date: string; // date
  event_name: string;
  car_name: string;
  split: number;
  race_start_elo: number;
  race_start_sr: string;
  start_pos: number;
  finishing_pos: number;
  rating_change: number;
  points: number;
  sr_change: number;
  best_of_week: boolean;
  incidents: number;
  sof: number;
  split2_sof: number;
  split3_sof: number;
  split4_sof: number;
  split5_sof: number;
  split6_sof: number;
  split7_sof: number;
  split8_sof: number;
  split9_sof: number;
  split10_sof: number;
}