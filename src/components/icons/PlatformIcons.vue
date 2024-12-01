<template>
  <component
    :is="icon"
    class="h-16 w-16 transition-transform duration-300 hover:scale-110"
    :class="iconColor"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { h } from 'vue';
import { 
  faWordpress, 
  faInstagram, 
  faWhatsapp, 
  faFacebook, 
  faTwitter, 
  faSlack, 
  faDiscord,
  faShopify,
  faLinkedin,
  faYoutube,
  faTiktok,
  faPinterest,
  faReddit,
  faTelegram,
  faTwitch,
  faSnapchat
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(
  faWordpress,
  faInstagram,
  faWhatsapp,
  faFacebook,
  faTwitter,
  faSlack,
  faDiscord,
  faShopify,
  faLinkedin,
  faYoutube,
  faTiktok,
  faPinterest,
  faReddit,
  faTelegram,
  faTwitch,
  faSnapchat
);

const props = defineProps<{
  platform: string;
}>();

const icon = computed(() => {
  const icons: Record<string, any> = {
    WordPress: ['fab', 'wordpress'],
    Instagram: ['fab', 'instagram'],
    WhatsApp: ['fab', 'whatsapp'],
    Facebook: ['fab', 'facebook'],
    Twitter: ['fab', 'twitter'],
    Slack: ['fab', 'slack'],
    Discord: ['fab', 'discord'],
    Shopify: ['fab', 'shopify'],
    LinkedIn: ['fab', 'linkedin'],
    YouTube: ['fab', 'youtube'],
    TikTok: ['fab', 'tiktok'],
    Pinterest: ['fab', 'pinterest'],
    Reddit: ['fab', 'reddit'],
    Telegram: ['fab', 'telegram'],
    Twitch: ['fab', 'twitch'],
    Snapchat: ['fab', 'snapchat']
  };

  return {
    render() {
      return h(FontAwesomeIcon, { icon: icons[props.platform] });
    }
  };
});

const iconColor = computed(() => {
  const colors: Record<string, string> = {
    WordPress: 'text-[#21759b]',
    Instagram: 'text-[#E4405F]',
    WhatsApp: 'text-[#25D366]',
    Facebook: 'text-[#1877F2]',
    Twitter: 'text-[#1DA1F2]',
    Slack: 'text-[#4A154B]',
    Discord: 'text-[#7289DA]',
    Shopify: 'text-[#7AB55C]',
    LinkedIn: 'text-[#0A66C2]',
    YouTube: 'text-[#FF0000]',
    TikTok: 'text-[#000000]',
    Pinterest: 'text-[#BD081C]',
    Reddit: 'text-[#FF4500]',
    Telegram: 'text-[#0088cc]',
    Twitch: 'text-[#9146FF]',
    Snapchat: 'text-[#FFFC00]'
  };

  return colors[props.platform];
});
</script>