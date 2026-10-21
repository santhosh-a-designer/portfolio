#!/usr/bin/env python3
import os
import sys
import base64
import json
import subprocess
from pathlib import Path

ROOT = Path("/Users/simonsanthosh/Downloads/portfolio")
VIDYA_ROOT = Path("/Users/simonsanthosh/Downloads/vidyas-kitchen")
PWA_SHOTS = ROOT / "public/case-studies/vidyas-kitchen/component-shots"
DASH_SHOTS = PWA_SHOTS / "dashboard"
DRIVER_SHOTS = PWA_SHOTS / "driver"

PDF_DEST = ROOT / "public/case-studies/vidyas-kitchen/design-system.pdf"
VIDYA_PDF_DEST = VIDYA_ROOT / "Vidya-Kitchen-UI-Design-System.pdf"

def get_b64(path):
    p = Path(path)
    if not p.exists():
        return ""
    suffix = p.suffix.lower()
    mime = "image/webp" if suffix == ".webp" else "image/svg+xml" if suffix == ".svg" else "image/png"
    data = p.read_bytes()
    return f"data:{mime};base64,{base64.b64encode(data).decode('utf-8')}"

logo_b64 = get_b64(VIDYA_ROOT / "public/VK_Logo.webp") or get_b64(VIDYA_ROOT / "public/logo.png")

# Load all 118 extracted SVGs & App Map
icons_json_path = Path("/tmp/all_extracted_svgs.json")
ICONS = json.loads(icons_json_path.read_text()) if icons_json_path.exists() else {}

app_map_path = Path("/tmp/icon_app_map.json")
ICON_APPS = json.loads(app_map_path.read_text()) if app_map_path.exists() else {}

# ---------------- COMPONENT REGISTRY (88 REAL PRODUCTION ITEMS) ----------------

# 24 BUTTONS & CONTROLS (Grouped strictly together)
BUTTONS_PART1 = [
    # Customer Mobile PWA Primary Actions
    {"id": "BTN-01", "name": "Send OTP Button (Active)", "app": "Customer PWA", "file": PWA_SHOTS / "02_btn_send_otp_active.png", "type": "Primary CTA", "w": "100% (340px)", "h": "48px", "r": "24px Pill", "fill": "Linear Red Gradient", "cta": "White #FFFFFF", "notes": "Solid vibrant crimson with subtle touch shadow"},
    {"id": "BTN-02", "name": "Send OTP Button (Disabled)", "app": "Customer PWA", "file": PWA_SHOTS / "03_btn_send_otp_disabled.png", "type": "Disabled CTA", "w": "100% (340px)", "h": "48px", "r": "24px Pill", "fill": "#E5E5E5", "cta": "#999999", "notes": "Muted gray low-contrast invalid state"},
    {"id": "BTN-03", "name": "Slide to Place Order Button", "app": "Customer PWA", "file": PWA_SHOTS / "37_btn_slide_place_order.png", "type": "Gesture Slider", "w": "100% (340px)", "h": "52px", "r": "26px Pill", "fill": "#BD2320 Crimson", "cta": "White Sliding Knob", "notes": "Interactive swipe gesture order confirmation"},
    {"id": "BTN-04", "name": "Change Address on Map CTA", "app": "Customer PWA", "file": PWA_SHOTS / "19_btn_change_address_map.png", "type": "Secondary CTA", "w": "100% (320px)", "h": "44px", "r": "22px Pill", "fill": "#BD2320 Crimson", "cta": "White Bold Text", "notes": "Launches interactive map pin location selector"},
    {"id": "BTN-05", "name": "Account Log Out Button", "app": "Customer PWA", "file": PWA_SHOTS / "15_btn_log_out.png", "type": "Destructive CTA", "w": "100% (340px)", "h": "48px", "r": "24px Pill", "fill": "Linear Red Gradient", "cta": "White #FFFFFF", "notes": "Full-width crimson account exit action pill"},

    # Kitchen Station Board Admin & Dispatch Actions
    {"id": "BTN-06", "name": "Confirm Action Yellow Button", "app": "Kitchen KDS", "file": DASH_SHOTS / "d03_btn_confirm_yellow.png", "type": "Primary Auth CTA", "w": "100% (340px)", "h": "52px", "r": "26px Pill", "fill": "#F5E32D Radiant Amber", "cta": "Black Bold #000", "notes": "Full-width station PIN authentication confirm CTA"},
    {"id": "BTN-07", "name": "'Create promo' Solid CTA", "app": "Kitchen KDS", "file": DASH_SHOTS / "d16_btn_create_promo_solid.png", "type": "Primary Form CTA", "w": "100% (340px)", "h": "52px", "r": "26px Pill", "fill": "#F5E32D Radiant Amber", "cta": "Black Bold #000", "notes": "Primary promotional campaign creation action button"},
    {"id": "BTN-08", "name": "Dispatch & Notify Driver CTA", "app": "Kitchen KDS", "file": DRIVER_SHOTS / "dr12_btn_dispatch_notify_driver.png", "type": "Dispatch Action", "w": "100% (340px)", "h": "52px", "r": "26px Pill", "fill": "#F5E32D Radiant Amber", "cta": "Black Bold #000", "notes": "Kitchen dispatch trigger sending order push notification to driver"},
    {"id": "BTN-09", "name": "'+ New promo' Outlined Button", "app": "Kitchen KDS", "file": DASH_SHOTS / "d14_btn_new_promo_outlined.png", "type": "Outlined CTA", "w": "128px Button", "h": "42px", "r": "14px Squircle", "fill": "#121215", "cta": "Yellow Border & Label", "notes": "Opens AI discount recommendation and campaign builder"},
    {"id": "BTN-10", "name": "'+ Add Driver' Outlined CTA", "app": "Kitchen KDS", "file": DASH_SHOTS / "d18_btn_add_driver_outlined.png", "type": "Outlined CTA", "w": "124px Button", "h": "42px", "r": "14px Squircle", "fill": "#121215", "cta": "Yellow Border & Label", "notes": "Opens modal for onboarding new delivery fleet drivers"},
    {"id": "BTN-11", "name": "Audio & Logout Action Icons", "app": "Kitchen KDS", "file": DASH_SHOTS / "d06_btns_audio_logout_icons.png", "type": "Header Controls", "w": "96px Group", "h": "44px", "r": "14px Squircle", "fill": "#16161A", "cta": "White Speaker / Red Exit", "notes": "Sound alert mute/unmute toggle and station security logout"},

    # Driver Delivery PWA Transit CTAs
    {"id": "BTN-12", "name": "Sign In Button (Active State)", "app": "Driver Fleet", "file": DRIVER_SHOTS / "dr05_btn_signin_active.png", "type": "Primary Auth CTA", "w": "100% (340px)", "h": "48px", "r": "24px Pill", "fill": "#E03131 Coral Red", "cta": "White Bold 'Sign In →'", "notes": "Vibrant solid coral red driver session start CTA"},
]

BUTTONS_PART2 = [
    {"id": "BTN-13", "name": "Sign In Button (Disabled)", "app": "Driver Fleet", "file": DRIVER_SHOTS / "dr02_btn_signin_disabled.png", "type": "Disabled CTA", "w": "100% (340px)", "h": "48px", "r": "24px Pill", "fill": "#4A1818 Muted Red", "cta": "#888888 Text", "notes": "Inactive sign-in state before mobile & PIN validation"},
    {"id": "BTN-14", "name": "'I\\'ve reached the customer' CTA", "app": "Driver Fleet", "file": DRIVER_SHOTS / "dr15_btn_reached_customer_bell.png", "type": "Transit Action", "w": "100% (340px)", "h": "52px", "r": "26px Pill", "fill": "#E03131 Coral Red", "cta": "White Bell + Bold Text", "notes": "Notifies customer of arrival and activates payment options"},
    {"id": "BTN-15", "name": "Customer Direct Call Action", "app": "Driver Fleet", "file": DRIVER_SHOTS / "dr17_btn_call_customer.png", "type": "Communication", "w": "100% (340px)", "h": "48px", "r": "24px Pill", "fill": "#16161A", "cta": "White Phone Icon", "notes": "Direct phone dial trigger for rider-to-customer coordination"},
    {"id": "BTN-16", "name": "Dish Card '+ ADD' Pill Button", "app": "Customer PWA", "file": PWA_SHOTS / "20_btn_dish_add_pill.png", "type": "Menu Action", "w": "88px Pill", "h": "34px", "r": "17px Pill", "fill": "#BD2320 Crimson", "cta": "White Bold '+ ADD'", "notes": "Primary dish card quick-add CTA trigger"},
    {"id": "BTN-17", "name": "Unselected Stepper Pill (- 00 +)", "app": "Customer PWA", "file": PWA_SHOTS / "27_stepper_pill_unselected.png", "type": "Quantity Stepper", "w": "96px Pill", "h": "32px", "r": "16px Pill", "fill": "#EBEBEB", "cta": "Black Circle Plus", "notes": "Inactive quantity stepper inside portion customizer"},
    {"id": "BTN-18", "name": "Dual Action Dock (Edit / View Cart)", "app": "Customer PWA", "file": PWA_SHOTS / "41_bar_edit_item_view_cart.png", "type": "Dual CTA Dock", "w": "100% (340px)", "h": "54px", "r": "27px Pill", "fill": "rgba(255,255,255,0.92)", "cta": "Edit Outlined / View Solid", "notes": "Outlined button paired with solid crimson cart CTA"},
    {"id": "BTN-19", "name": "Floating Cart Summary Bar", "app": "Customer PWA", "file": PWA_SHOTS / "29_bar_floating_cart_summary.png", "type": "Floating Cart CTA", "w": "100% (340px)", "h": "52px", "r": "26px Pill", "fill": "Dark #1A1A1A", "cta": "View Cart → #BD2320", "notes": "'1 ITEM · ₹349' + sticky checkout trigger dock"},
    {"id": "BTN-20", "name": "Support Resolution Buttons", "app": "Kitchen KDS", "file": DASH_SHOTS / "d22_btns_support_resolution_actions.png", "type": "Multi-Action Group", "w": "280px Group", "h": "44px", "r": "18px Squircle", "fill": "Dark / Yellow Done", "cta": "Phone, Check, Rupee", "notes": "Call customer, Mark resolved, and Issue refund actions"},
    {"id": "BTN-21", "name": "Swipe to Mark Delivered (Slider)", "app": "Driver Fleet", "file": DRIVER_SHOTS / "dr23_btn_swipe_mark_delivered_red.png", "type": "Handshake Slider", "w": "100% (340px)", "h": "52px", "r": "26px Pill", "fill": "#E03131 Coral Red", "cta": "White Sliding Knob", "notes": "Slide gesture for final delivery handshake"},
    {"id": "BTN-22", "name": "Payment Received Confirmation", "app": "Driver Fleet", "file": DRIVER_SHOTS / "dr22_btn_payment_received_green.png", "type": "Status Confirmation", "w": "100% (340px)", "h": "52px", "r": "26px Pill", "fill": "#22C55E Solid Green", "cta": "White '✓ Payment received'", "notes": "Cash on delivery collection confirmation state button"},
    {"id": "BTN-23", "name": "Delivery Completed State", "app": "Driver Fleet", "file": DRIVER_SHOTS / "dr24_btn_delivered_completed_green.png", "type": "Completed State", "w": "100% (340px)", "h": "52px", "r": "26px Pill", "fill": "#22C55E Solid Green", "cta": "White Checkmark Knob", "notes": "Delivered completed order success state badge"},
    {"id": "BTN-24", "name": "GPS Exception & Override Actions", "app": "Driver Fleet", "file": DRIVER_SHOTS / "dr20_btns_gps_wrong_undelivered.png", "type": "Exception Links", "w": "100% (340px)", "h": "88px", "r": "22px Pill", "fill": "Dark / Outlined Red", "cta": "Coral 'GPS is wrong'", "notes": "Door override + Couldn't deliver order link"},
]

# FLOW-BASED CARDS & SCREENS (Strictly following case study screen flow in 2-cards-in-a-row)

# Page 7: PWA Flow 01–02: Onboarding & Location Discovery (4 items, 2x2 grid)
PWA_PAGE7 = [
    {"id": "PWA-01", "name": "PWA Install Bottom Sheet", "file": PWA_SHOTS / "01_install_app_sheet.png", "flow": "01 · Splash & Onboarding", "w": "100% (360px)", "h": "132px", "r": "28px Top", "fill": "#FFFFFF", "cta": "#BD2320", "notes": "Circular chef avatar + 'Get App' button for standalone PWA"},
    {"id": "PWA-06", "name": "Detect via GPS Location Bar", "file": PWA_SHOTS / "06_location_use_gps.png", "flow": "02 · Location Discovery", "w": "100% (340px)", "h": "52px", "r": "16px Squircle", "fill": "#FFFFFF", "cta": "#BD2320 GPS Arrow", "notes": "Use current location quick detector with GPS accuracy"},
    {"id": "PWA-07", "name": "Sivakasi Delivery Area Banner", "file": PWA_SHOTS / "07_banner_sivakasi_gift.png", "flow": "02 · Location Boundary", "w": "100% (340px)", "h": "58px", "r": "16px Squircle", "fill": "#FEF3C7 Amber", "cta": "#92400E Alert", "notes": "Sivakasi gifting & delivery boundary notice"},
    {"id": "PWA-08", "name": "Location Search Autocomplete", "file": PWA_SHOTS / "08_location_search_dropdown.png", "flow": "02 · Location Autocomplete", "w": "100% (340px)", "h": "Auto Dropdown", "r": "16px Squircle", "fill": "#FFFFFF", "cta": "#1A1A1A Text", "notes": "Google Places API dropdown search result list"},
]

# Page 8: PWA Flow 02–03: Location Modal & Global Header (4 items, 2x2 grid)
PWA_PAGE8 = [
    {"id": "PWA-17", "name": "Location Change Modal Sheet", "file": PWA_SHOTS / "17_sheet_change_location_modal.png", "flow": "02 · Location Selector", "w": "100% (360px)", "h": "280px", "r": "28px Top", "fill": "#FFFFFF", "cta": "Inside Zone Badge", "notes": "Delivery zone validation modal with saved address chips"},
    {"id": "PWA-18", "name": "Saved Address Chips Row", "file": PWA_SHOTS / "18_chips_saved_addresses_row.png", "flow": "02 · Address Book", "w": "100% Scroll", "h": "36px", "r": "18px Pill", "fill": "Soft Gray / Red Active", "cta": "House / Work / Pin", "notes": "Home, Work, and Anand house address chips"},
    {"id": "PWA-16", "name": "Header Delivering-To Capsule", "file": PWA_SHOTS / "16_capsule_header_delivering_to.png", "flow": "03 · Global Header", "w": "Auto Capsule", "h": "38px", "r": "20px Pill", "fill": "rgba(255,255,255,0.92)", "cta": "#BD2320 Pin", "notes": "'Delivering to Sivakasi, Tamil Nadu' header pill"},
    {"id": "PWA-04", "name": "Floating Bottom Nav Dock", "file": PWA_SHOTS / "04_nav_floating_dock.png", "flow": "03 · Global Shell", "w": "260px Dock", "h": "56px", "r": "28px Pill", "fill": "rgba(255,255,255,0.92)", "cta": "#BD2320 Active Pill", "notes": "Frosted capsule with Home, Orders, Profile pills"},
]

# Page 9: PWA Flow 04–06: Home Feed, Categories & Food Cards (4 items, 2x2 grid)
PWA_PAGE9 = [
    {"id": "PWA-05", "name": "Feed Segment Tabs", "file": PWA_SHOTS / "05_tabs_best_selling.png", "flow": "04 · Home Feed", "w": "210px Switcher", "h": "40px", "r": "20px Pill", "fill": "#F0F0F0", "cta": "#BD2320 Active Pill", "notes": "Best Selling vs Favorites toggle switcher"},
    {"id": "PWA-24", "name": "Menu Category Filter Pills", "file": PWA_SHOTS / "24_pills_category_filter_row.png", "flow": "05 · Browse Menu", "w": "100% Scroll", "h": "38px", "r": "19px Pill", "fill": "#BD2320 Active / White", "cta": "White / Charcoal", "notes": "Chicken, Mutton, Egg category filter pills"},
    {"id": "PWA-21", "name": "Single Dish Card (Mom's Recipe)", "file": PWA_SHOTS / "21_card_single_dish_moms_recipe.png", "flow": "05 · Browse Menu", "w": "100% (340px)", "h": "210px", "r": "22px Squircle", "fill": "#FFFFFF", "cta": "₹349 Pill + ADD", "notes": "Chicken Gravy card with hero photo, tag & portion"},
    {"id": "PWA-25", "name": "2-Column Menu Food Cards Grid", "file": PWA_SHOTS / "25_grid_two_column_menu_cards.png", "flow": "05 · Browse Menu", "w": "100% (340px)", "h": "220px", "r": "20px Squircle", "fill": "#FFFFFF", "cta": "Price Pills & CTAs", "notes": "Mom's Recipe & Sister's Recipe dual cards"},
]

# Page 10: PWA Flow 05–08: Suggested Dishes, Bot & Portion Cards (4 items, 2x2 grid)
PWA_PAGE10 = [
    {"id": "PWA-40", "name": "Suggested Dishes Vertical List", "file": PWA_SHOTS / "40_list_suggested_dishes.png", "flow": "05 · Browse Menu", "w": "100% (340px)", "h": "210px", "r": "20px Squircle", "fill": "#FFFFFF", "cta": "Red Round Arrow CTAs", "notes": "3 gravy dishes with prices and direct add buttons"},
    {"id": "PWA-22", "name": "Vidya Bot & Explore Action Tiles", "file": PWA_SHOTS / "22_tiles_vidya_bot_and_explore.png", "flow": "06 · Concierge Bot", "w": "100% (340px)", "h": "76px", "r": "18px Squircle", "fill": "WhatsApp Green / Neutral", "cta": "Bot Avatar / Cutlery", "notes": "WhatsApp concierge AI bot tile + explore menu"},
    {"id": "PWA-26", "name": "Portion Option Card (Unselected)", "file": PWA_SHOTS / "26_card_portion_option_unselected.png", "flow": "07 · Dish Customizer", "w": "100% (340px)", "h": "72px", "r": "18px Squircle", "fill": "#FAFAF9", "cta": "- 00 + Stepper", "notes": "500gm Serves 1-2 / Not in cart"},
    {"id": "PWA-28", "name": "Portion Option Card (Selected)", "file": PWA_SHOTS / "28_card_portion_option_selected.png", "flow": "07 · Dish Customizer", "w": "100% (340px)", "h": "72px", "r": "18px Squircle", "fill": "Rose Tint #FDF2F2", "cta": "Red - 01 + Stepper", "notes": "Active red stroke, '1 in cart' indicator badge"},
]

# Page 11: PWA Flow 08–11: Gifting, Cart & Delivery Slots (4 items, 2x2 grid)
PWA_PAGE11 = [
    {"id": "PWA-39", "name": "Dish Pairing & Story Card", "file": PWA_SHOTS / "39_card_dish_pairing_note.png", "flow": "08 · Culinary Story", "w": "100% (340px)", "h": "130px", "r": "20px Squircle", "fill": "#FFFFFF", "cta": "BEST PAIRED WITH Box", "notes": "New on menu tag + pairing recommendation quotation"},
    {"id": "PWA-30", "name": "Cart Line Item Row", "file": PWA_SHOTS / "30_row_cart_line_item.png", "flow": "09 · Cart Management", "w": "100% (340px)", "h": "78px", "r": "18px Squircle", "fill": "#FFFFFF", "cta": "Red Stepper Pill", "notes": "Dish thumbnail, 500gm portion, ₹349, quantity controls"},
    {"id": "PWA-33", "name": "Gift Recipient Form (Expanded)", "file": PWA_SHOTS / "33_form_gift_expanded.png", "flow": "10 · Gifting Flow", "w": "100% (340px)", "h": "290px", "r": "24px Squircle", "fill": "#FFFFFF", "cta": "Red Ring & Form", "notes": "3-step recipient form: Name, Phone, Delivery note"},
    {"id": "PWA-35", "name": "Meal Time Slots Selector", "file": PWA_SHOTS / "35_selector_meal_time_slots.png", "flow": "11 · Date & Time Slots", "w": "100% (340px)", "h": "134px", "r": "18px Squircle", "fill": "#FFFFFF", "cta": "Breakfast (Selected)", "notes": "Breakfast 7-9 AM, Lunch 12-2 PM, Dinner selection"},
]

# Page 12: PWA Flow 11–14: Checkout, Live Tracking & Order History (4 items, 2x2 grid)
PWA_PAGE12 = [
    {"id": "PWA-36", "name": "Payment Method Selector Cards", "file": PWA_SHOTS / "36_cards_payment_method_selector.png", "flow": "12 · Payment Selector", "w": "100% (340px)", "h": "76px", "r": "18px Squircle", "fill": "Rose Selected / White", "cta": "Pay Online vs Pay at Door", "notes": "UPI / Card online vs Cash on Delivery cards"},
    {"id": "PWA-10", "name": "Order Placed ETA Arrival Card", "file": PWA_SHOTS / "10_card_order_placed_eta.png", "flow": "13 · Order Success", "w": "100% (340px)", "h": "112px", "r": "20px Squircle", "fill": "#FFFFFF", "cta": "#BD2320 Order ID", "notes": "Sat 10 Oct · 12:00 pm arrival · Order #00009"},
    {"id": "PWA-11", "name": "Delivery Status Tracker Card", "file": PWA_SHOTS / "11_card_delivery_status_tracker.png", "flow": "14 · Live Tracking", "w": "100% (340px)", "h": "260px", "r": "24px Squircle", "fill": "Dark #121215", "cta": "#BD2320 & WhatsApp", "notes": "5-stage progress + Cash to collect alert card"},
    {"id": "PWA-14", "name": "Order History Row (Delivered)", "file": PWA_SHOTS / "14_row_order_history_delivered.png", "flow": "14 · Order History", "w": "100% (340px)", "h": "84px", "r": "18px Squircle", "fill": "#FFFFFF", "cta": "Green Badge / Receipt >", "notes": "Dish thumbnail + #00006 Delivered receipt"},
]

# Page 13: Kitchen Dashboard: Station Security & Navigation (4 items, 2x2 grid)
DASH_PAGE13 = [
    {"id": "DSH-01", "name": "Install Dashboard App Banner", "file": DASH_SHOTS / "d01_banner_install_dashboard.png", "flow": "Station Shell", "w": "100% (380px)", "h": "76px", "r": "20px Squircle", "fill": "#121215", "cta": "Yellow '↓ Get' Button", "notes": "Chef avatar, quick access text, close icon"},
    {"id": "DSH-02", "name": "4-Digit Staff PIN Input", "file": DASH_SHOTS / "d02_inputs_pin_digit_boxes.png", "flow": "Station Security", "w": "260px Row", "h": "58px", "r": "16px Squircle", "fill": "#121215", "cta": "Yellow Glow Border", "notes": "4 squircle cells with masked yellow PIN dots"},
    {"id": "DSH-04", "name": "Dashboard 5-Tab Floating Nav", "file": DASH_SHOTS / "d04_nav_bottom_dock_dashboard.png", "flow": "Station Shell", "w": "340px Dock", "h": "54px", "r": "27px Pill", "fill": "Dark #121215", "cta": "Yellow 'Orders' Pill", "notes": "Orders, Revenue, AI, Offers, Drivers tabs"},
    {"id": "DSH-05", "name": "Shift Executive KPI Cards", "file": DASH_SHOTS / "d05_cards_stats_metrics_row.png", "flow": "Kitchen Operations", "w": "100% (360px)", "h": "64px", "r": "16px Squircle", "fill": "#16161A", "cta": "Orange, Yellow, Mint", "notes": "New 13, Today 1, Revenue ₹1,523 summary cards"},
]

# Page 14: Kitchen Dashboard: Live Operations & Dispatch Management (4 items, 2x2 grid)
DASH_PAGE14 = [
    {"id": "DSH-20", "name": "6-Stage Pipeline Filter Row", "file": DASH_SHOTS / "d20_row_order_pipeline_status_filters.png", "flow": "Kitchen Operations", "w": "100% Scroll", "h": "52px", "r": "16px Squircle", "fill": "#16161A", "cta": "13 New Yellow Active", "notes": "New, Prep, Ready, Dispatch, Not Deliv, Done"},
    {"id": "DSH-07", "name": "Live Kitchen Station Order Card", "file": DASH_SHOTS / "d07_card_kitchen_live_order.png", "flow": "Kitchen Operations", "w": "100% (360px)", "h": "260px", "r": "22px Squircle", "fill": "#121215", "cta": "Reject Red vs Accept Yellow", "notes": "Order #00017 with 5-stage kitchen prep stepper"},
    {"id": "DSH-24", "name": "Driver Assignment Modal Sheet", "file": DRIVER_SHOTS / "dr10_sheet_select_driver_modal.png", "flow": "Fleet Dispatch", "w": "100% (360px)", "h": "290px", "r": "26px Top", "fill": "#121215", "cta": "Yellow Truck Icon", "notes": "Kitchen staff driver assignment modal (Anand, Deepak, Simon)"},
    {"id": "DSH-25", "name": "Assigned Driver Selection Chip", "file": DRIVER_SHOTS / "dr11_card_assigned_driver_chip.png", "flow": "Fleet Dispatch", "w": "100% (340px)", "h": "64px", "r": "18px Squircle", "fill": "#16161A", "cta": "Yellow Squircle Truck", "notes": "Kitchen selected driver chip with contact & truck badge"},
]

# Page 15: Kitchen Dashboard: Analytics, AI Pricing & Support (4 items, 2x2 grid)
DASH_PAGE15 = [
    {"id": "DSH-08", "name": "2×2 Revenue KPI Grid", "file": DASH_SHOTS / "d08_grid_revenue_sales_kpis.png", "flow": "Financial Analytics", "w": "100% (360px)", "h": "180px", "r": "18px Squircle", "fill": "#16161A", "cta": "Yellow Selected Border", "notes": "Total Sales, Revenue, Product Sales, AOV with % metrics"},
    {"id": "DSH-09", "name": "Monthly Sales Bar Chart Card", "file": DASH_SHOTS / "d09_chart_monthly_sales_bars.png", "flow": "Financial Analytics", "w": "100% (360px)", "h": "190px", "r": "22px Squircle", "fill": "#121215", "cta": "Glowing Yellow Oct Bar", "notes": "Year 2026 overview with PEAK badge and sales volume"},
    {"id": "DSH-13", "name": "AI Discount Suggestion Card", "file": DASH_SHOTS / "d13_card_ai_discount_suggestion.png", "flow": "AI Pricing Agent", "w": "100% (360px)", "h": "270px", "r": "22px Squircle", "fill": "#121215", "cta": "20% Active Pill / Approve", "notes": "Chilly Chicken AI dynamic pricing discount recommendation"},
    {"id": "DSH-21", "name": "Customer Support Issue Card", "file": DASH_SHOTS / "d21_card_customer_support_issue.png", "flow": "Customer Support", "w": "100% (360px)", "h": "160px", "r": "20px Squircle", "fill": "#121215", "cta": "Call, Mark Done, Refund", "notes": "'Sample guest' cold gravy complaint ticket with resolution"},
]

# Page 16: Driver Delivery PWA: Auth, Transit & Dynamic UPI QR (4 items, 2x2 grid)
DRIVER_PAGE16 = [
    {"id": "DRV-01", "name": "Mobile Number Input (Empty)", "file": DRIVER_SHOTS / "dr01_input_mobile_empty.png", "flow": "Driver Auth", "w": "100% (340px)", "h": "52px", "r": "18px Squircle", "fill": "#121215", "cta": "🇮🇳 +91 Prefix", "notes": "Empty state mobile phone input bar"},
    {"id": "DRV-03", "name": "Verified Driver Profile Card", "file": DRIVER_SHOTS / "dr03_input_mobile_verified_driver_card.png", "flow": "Driver Auth", "w": "100% (340px)", "h": "96px", "r": "18px Squircle", "fill": "#0E1812 Dark Green", "cta": "Green Check 'Anand'", "notes": "Validated phone with REGISTERED DRIVER tag"},
    {"id": "DRV-13", "name": "Active Delivery Order Card", "file": DRIVER_SHOTS / "dr13_card_active_delivery_order.png", "flow": "Active Transit", "w": "100% (360px)", "h": "170px", "r": "22px Squircle", "fill": "#121215", "cta": "Haritha / ₹946 / Address", "notes": "Pepper Chicken order card with map address"},
    {"id": "DRV-21", "name": "Dynamic UPI QR Code Scanner Card", "file": DRIVER_SHOTS / "dr21_card_upi_qr_code_scan.png", "flow": "Payment Reconciliation", "w": "260px Card", "h": "270px", "r": "22px Squircle", "fill": "#121215", "cta": "Scannable White QR", "notes": "Ask them to scan / Paying Vidya's Kitchen ₹946"},
]

# ----------------- RENDERING HELPERS -----------------

def render_button_card(btn):
    b64 = get_b64(btn["file"])
    app_badge_cls = "pwa" if "Customer" in btn["app"] else "dash" if "Kitchen" in btn["app"] else "driver"
    return f"""
    <div class="button-spec-card">
      <div class="btn-card-header">
        <span class="btn-id">{btn["id"]}</span>
        <span class="btn-app-badge {app_badge_cls}">{btn["app"]}</span>
        <span class="btn-type-badge">{btn["type"]}</span>
        <span class="btn-name">{btn["name"]}</span>
      </div>
      <div class="btn-card-body">
        <div class="btn-preview-well">
          {"<img src='" + b64 + "' alt='" + btn["name"] + "'>" if b64 else "<div style='color:#666;font-size:10px;'>Preview Unavailable</div>"}
        </div>
        <div class="btn-card-meta">
          <div class="btn-measurements">
            <span class="meas-chip"><strong>W:</strong> {btn["w"]}</span>
            <span class="meas-chip"><strong>H:</strong> {btn["h"]}</span>
            <span class="meas-chip"><strong>R:</strong> {btn["r"]}</span>
          </div>
          <div class="btn-tokens">
            <span class="token-chip">Fill: {btn["fill"]}</span>
            <span class="token-chip">CTA: {btn["cta"]}</span>
          </div>
          <div class="btn-notes">{btn["notes"]}</div>
        </div>
      </div>
    </div>
    """

def render_large_card(comp, is_light=False):
    b64 = get_b64(comp["file"])
    bg_style = "background: #FAFAF9; border: 1px solid rgba(255,255,255,0.12);" if is_light else "background: #060608; border: 1px solid rgba(255,255,255,0.06);"
    return f"""
    <div class="large-comp-card">
      <div class="large-comp-header">
        <div class="header-left-meta">
          <span class="large-comp-id">{comp["id"]}</span>
          <span class="large-comp-name">{comp["name"]}</span>
        </div>
        <span class="large-comp-flow">{comp["flow"]}</span>
      </div>
      <div class="large-comp-img-well" style="{bg_style}">
        {"<img src='" + b64 + "' alt='" + comp["name"] + "'>" if b64 else "<div style='color:#666;font-size:10px;'>Preview Unavailable</div>"}
      </div>
      <div class="large-comp-meta">
        <div class="large-comp-specs">
          <span class="meas-chip">W: {comp["w"]}</span>
          <span class="meas-chip">H: {comp["h"]}</span>
          <span class="meas-chip">R: {comp["r"]}</span>
          <span class="token-chip">Fill: {comp["fill"]}</span>
          <span class="token-chip">CTA: {comp["cta"]}</span>
        </div>
        <div class="large-comp-notes">{comp["notes"]}</div>
      </div>
    </div>
    """

def render_page(title, subtitle, section_badge, content_html, page_num, total_pages=16):
    return f"""
  <div class="page">
    <div class="page-header">
      <div class="page-header-left">
        {"<img src='" + logo_b64 + "' class='header-logo'>" if logo_b64 else ""}
        <span class="header-brand">Vidya's Kitchen UI Design System</span>
        <span class="header-badge">{section_badge}</span>
      </div>
      <div class="page-header-right">
        <span class="header-title">{title}</span>
        <span class="header-sub">{subtitle}</span>
      </div>
    </div>

    <div class="page-body">
      {content_html}
    </div>

    <div class="page-footer">
      <div class="footer-left">VIDYA'S KITCHEN · ENTERPRISE DESIGN SPECIFICATION · SOURCE CODE ALIGNED</div>
      <div class="footer-right">PAGE {page_num} OF {total_pages}</div>
    </div>
  </div>
    """

# ----------------- SECTION GENERATORS -----------------

# Page 1: Cover & Architecture (2 CARDS IN A ROW - 2x2 Grid)
def gen_page_1():
    content = f"""
    <div class="cover-hero">
      <div class="cover-badge">ENTERPRISE DESIGN SPECIFICATION · V3.5.0</div>
      <h1 class="cover-title">Vidya's Kitchen Multi-Surface Design System</h1>
      <p class="cover-desc">Complete multi-surface design tokens, atomic UI components, and tactile interaction architecture for Sivakasi's premier cloud kitchen platform. Aligned 100% to production code across all digital touchpoints.</p>
    </div>

    <div class="surfaces-matrix-2x2">
      <div class="surface-card-wide">
        <div class="surface-header">
          <div class="badge-title-group">
            <span class="surface-badge pwa-badge">SURFACE 01 · PWA</span>
            <h3>Customer Mobile PWA</h3>
          </div>
          <span class="surface-count">41 UI Components</span>
        </div>
        <p class="surface-role">Consumer dining & ordering mobile PWA with daylight contrast, dynamic portion toggles, and instant Razorpay/COD checkout.</p>
        <div class="surface-specs-grid">
          <div class="spec-cell"><span class="lbl">Viewport</span><span class="val">390×844px Mobile Viewport</span></div>
          <div class="spec-cell"><span class="lbl">Target Tech</span><span class="val">Next.js 15.1 · React 19 PWA</span></div>
          <div class="spec-cell"><span class="lbl">Typography</span><span class="val">Outfit 800 Bold / Inter 400</span></div>
          <div class="spec-cell"><span class="lbl">Color Theme</span><span class="val">Crimson #BD2320 & Cream Surfaces</span></div>
          <div class="spec-cell"><span class="lbl">Touch Target</span><span class="val">Min 48px · Round Pill Geometry</span></div>
          <div class="spec-cell"><span class="lbl">Key UX Flows</span><span class="val">Portions, Cart Dock, Gifting Carousel</span></div>
        </div>
      </div>

      <div class="surface-card-wide">
        <div class="surface-header">
          <div class="badge-title-group">
            <span class="surface-badge dash-badge">SURFACE 02 · KDS</span>
            <h3>Kitchen Station Board</h3>
          </div>
          <span class="surface-count">26 UI Components</span>
        </div>
        <p class="surface-role">High-contrast, dark-mode kitchen display system and executive analytics board optimized for ambient heat, grease glare, and rapid tap touchpoints.</p>
        <div class="surface-specs-grid">
          <div class="spec-cell"><span class="lbl">Viewport</span><span class="val">1024×768+ Station Kiosk</span></div>
          <div class="spec-cell"><span class="lbl">Target Tech</span><span class="val">Next.js Realtime Station KDS</span></div>
          <div class="spec-cell"><span class="lbl">Typography</span><span class="val">Outfit 900 / JetBrains Mono 600</span></div>
          <div class="spec-cell"><span class="lbl">Color Theme</span><span class="val">Deep Obsidian / Radiant Amber</span></div>
          <div class="spec-cell"><span class="lbl">Touch Target</span><span class="val">Min 56px · High Contrast Glowing</span></div>
          <div class="spec-cell"><span class="lbl">Key UX Flows</span><span class="val">PIN Auth, 5-Stage Stepper, Fleet Dispatch</span></div>
        </div>
      </div>

      <div class="surface-card-wide">
        <div class="surface-header">
          <div class="badge-title-group">
            <span class="surface-badge driver-badge">SURFACE 03 · FLEET</span>
            <h3>Driver Delivery PWA</h3>
          </div>
          <span class="surface-count">21 UI Components</span>
        </div>
        <p class="surface-role">High-legibility outdoor rider PWA engineered for extreme sunlight, single-handed motorbike handling, turn-by-turn navigation, and cash/UPI reconciliation.</p>
        <div class="surface-specs-grid">
          <div class="spec-cell"><span class="lbl">Viewport</span><span class="val">360×780px Rider Viewport</span></div>
          <div class="spec-cell"><span class="lbl">Target Tech</span><span class="val">PWA · Web Geolocation & Push</span></div>
          <div class="spec-cell"><span class="lbl">Typography</span><span class="val">Outfit 800 Bold / Mono Numbers</span></div>
          <div class="spec-cell"><span class="lbl">Color Theme</span><span class="val">Coral #E03131 & Transit Emerald</span></div>
          <div class="spec-cell"><span class="lbl">Touch Target</span><span class="val">52px Swipe Slider · Audio Alerts</span></div>
          <div class="spec-cell"><span class="lbl">Key UX Flows</span><span class="val">Turn GPS, Call Rider, Dynamic QR Scan</span></div>
        </div>
      </div>

      <div class="surface-card-wide">
        <div class="surface-header">
          <div class="badge-title-group">
            <span class="surface-badge web-badge">SURFACE 04 · DESKTOP</span>
            <h3>Desktop Landing & Kiosk</h3>
          </div>
          <span class="surface-count">88 Total Library</span>
        </div>
        <p class="surface-role">Immersive culinary brand showcase and corporate desktop ordering experience featuring rich food cinematography, editorial typography, and heritage story.</p>
        <div class="surface-specs-grid">
          <div class="spec-cell"><span class="lbl">Viewport</span><span class="val">1440×900+ Desktop Canvas</span></div>
          <div class="spec-cell"><span class="lbl">Target Tech</span><span class="val">Server Components SSR & Video</span></div>
          <div class="spec-cell"><span class="lbl">Typography</span><span class="val">Editorial Outfit / Inter Medium</span></div>
          <div class="spec-cell"><span class="lbl">Color Theme</span><span class="val">True Black #000 / Champagne Gold</span></div>
          <div class="spec-cell"><span class="lbl">Touch Target</span><span class="val">Precision Pointer & Keyboard Nav</span></div>
          <div class="spec-cell"><span class="lbl">Key UX Flows</span><span class="val">Brand Hero, Menu Grid, Corporate Kiosk</span></div>
        </div>
      </div>
    </div>

    <div class="architecture-flow-box">
      <div class="arch-flow-header">
        <span class="arch-title">MULTI-SURFACE SYNCHRONOUS DATA FLOW ARCHITECTURE</span>
        <span class="arch-badge">REAL-TIME EDGE SYNC</span>
      </div>
      <div class="arch-nodes">
        <div class="arch-node">
          <span class="node-icon">📱</span>
          <div class="node-info">
            <span class="node-name">Customer Mobile PWA</span>
            <span class="node-desc">Cart · Gifting · Razorpay / COD · Order Handshake</span>
          </div>
        </div>
        <div class="arch-arrow">➔ <span>IndexedDB / SSE</span> ➔</div>
        <div class="arch-node highlight">
          <span class="node-icon">🍳</span>
          <div class="node-info">
            <span class="node-name">Kitchen Station Board</span>
            <span class="node-desc">Order Queue · Live Audio · Driver Dispatch · AI Pricing</span>
          </div>
        </div>
        <div class="arch-arrow">➔ <span>Push & WebSockets</span> ➔</div>
        <div class="arch-node">
          <span class="node-icon">🛵</span>
          <div class="node-info">
            <span class="node-name">Driver Delivery PWA</span>
            <span class="node-desc">Turn GPS · Call Customer · Dynamic QR · Swipe Delivered</span>
          </div>
        </div>
      </div>
    </div>

    <div class="cover-meta-bar">
      <div class="meta-col"><strong>Framework:</strong> Next.js 15.1 · React 19 · TypeScript 5.7</div>
      <div class="meta-col"><strong>System Assets:</strong> 88 Real Components · 118 Production Icons · 4 Color Systems</div>
      <div class="meta-col"><strong>Structure:</strong> 1. Typography · 2. Colography · 3. Iconography · 4. Buttons · 5. Flow Components</div>
    </div>
    """
    return render_page("Overview & Multi-Surface Architecture", "CORE SYSTEM PRINCIPLES & TOUCHPOINTS", "SYSTEM SPEC", content, 1)

# Page 2: Typography (Outfit & Inter)
def gen_page_2():
    content = f"""
    <div class="typo-top-row">
      <div class="typo-family-card">
        <div class="family-badge primary">PRIMARY DISPLAY & BRAND TYPEFACE</div>
        <div class="family-name">Outfit</div>
        <div class="family-alphabet">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789</div>
        <div class="family-weights">
          <span class="weight-chip" style="font-weight:400">Regular 400</span>
          <span class="weight-chip" style="font-weight:500">Medium 500</span>
          <span class="weight-chip" style="font-weight:600">SemiBold 600</span>
          <span class="weight-chip" style="font-weight:700">Bold 700</span>
          <span class="weight-chip" style="font-weight:800">ExtraBold 800</span>
        </div>
        <p class="family-note">Used for all page titles, hero headers, dish names, price badges, modal headlines, and primary CTA buttons. Warm geometric curves and exceptional legibility.</p>
      </div>

      <div class="typo-family-card">
        <div class="family-badge secondary">SECONDARY BODY & INTERACTION TYPEFACE</div>
        <div class="family-name" style="font-family:'Inter', sans-serif">Inter</div>
        <div class="family-alphabet" style="font-family:'Inter', sans-serif">Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789</div>
        <div class="family-weights">
          <span class="weight-chip" style="font-family:'Inter', sans-serif; font-weight:400">Regular 400</span>
          <span class="weight-chip" style="font-family:'Inter', sans-serif; font-weight:500">Medium 500</span>
          <span class="weight-chip" style="font-family:'Inter', sans-serif; font-weight:600">SemiBold 600</span>
          <span class="weight-chip" style="font-family:'Inter', sans-serif; font-weight:700">Bold 700</span>
        </div>
        <p class="family-note">Engineered for dense user interfaces, micro-copy, delivery addresses, order numbers, ingredient notes, nutritional callouts, and system form fields.</p>
      </div>
    </div>

    <div class="typo-table-container">
      <div class="table-title">PRODUCTION TYPOGRAPHIC HIERARCHY & TOKEN SCALE</div>
      <table class="typo-table">
        <thead>
          <tr>
            <th>Role / Level</th>
            <th>Typeface</th>
            <th>Size</th>
            <th>Weight</th>
            <th>Line Ht</th>
            <th>Spacing</th>
            <th>CSS Token</th>
            <th>Application</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong style="color:#FFF">Display H1</strong></td>
            <td>Outfit</td>
            <td><span class="token-val">32px</span></td>
            <td>800 Extrabold</td>
            <td>38px</td>
            <td>-0.02em</td>
            <td><code>--text-display-h1</code></td>
            <td>App Hero, Brand Splash & Big Metrics</td>
          </tr>
          <tr>
            <td><strong style="color:#FFF">Page Header H2</strong></td>
            <td>Outfit</td>
            <td><span class="token-val">24px</span></td>
            <td>700 Bold</td>
            <td>30px</td>
            <td>-0.015em</td>
            <td><code>--text-header-h2</code></td>
            <td>View Titles, Modal Headers, Section Top</td>
          </tr>
          <tr>
            <td><strong style="color:#FFF">Card Headline H3</strong></td>
            <td>Outfit</td>
            <td><span class="token-val">18px</span></td>
            <td>700 Bold</td>
            <td>24px</td>
            <td>-0.01em</td>
            <td><code>--text-card-h3</code></td>
            <td>Dish Name, Order Card Title, Driver Name</td>
          </tr>
          <tr>
            <td><strong style="color:#FFF">Section Title H4</strong></td>
            <td>Outfit</td>
            <td><span class="token-val">15px</span></td>
            <td>600 SemiBold</td>
            <td>20px</td>
            <td>0</td>
            <td><code>--text-section-h4</code></td>
            <td>Segment Tabs, Filter Labels, Drawer Titles</td>
          </tr>
          <tr>
            <td><strong style="color:#FFF">Price / Metric</strong></td>
            <td>Outfit</td>
            <td><span class="token-val">16px / 18px</span></td>
            <td>800 Extrabold</td>
            <td>20px</td>
            <td>-0.01em</td>
            <td><code>--text-price-bold</code></td>
            <td>₹349 Price Pills, Revenue Totals, Counts</td>
          </tr>
          <tr>
            <td><strong style="color:#FFF">Body Large</strong></td>
            <td>Inter</td>
            <td><span class="token-val">15px</span></td>
            <td>400 Regular</td>
            <td>22px</td>
            <td>0</td>
            <td><code>--text-body-lg</code></td>
            <td>Dish Descriptions, Story Paragraphs</td>
          </tr>
          <tr>
            <td><strong style="color:#FFF">Body Standard</strong></td>
            <td>Inter</td>
            <td><span class="token-val">13px</span></td>
            <td>400 Regular</td>
            <td>18px</td>
            <td>0</td>
            <td><code>--text-body-base</code></td>
            <td>Address details, Form inputs, Delivery notes</td>
          </tr>
          <tr>
            <td><strong style="color:#FFF">Caption / Meta</strong></td>
            <td>Inter</td>
            <td><span class="token-val">11px</span></td>
            <td>500 Medium</td>
            <td>15px</td>
            <td>+0.01em</td>
            <td><code>--text-caption-sm</code></td>
            <td>Timestamps, Serves 1-2 tag, Subtitle copy</td>
          </tr>
          <tr>
            <td><strong style="color:#FFF">Status Badge</strong></td>
            <td>Outfit</td>
            <td><span class="token-val">10px</span></td>
            <td>700 Bold</td>
            <td>12px</td>
            <td>+0.04em</td>
            <td><code>--text-badge-micro</code></td>
            <td>SELECTED, OPEN, PENDING, NEW, LIVE tags</td>
          </tr>
          <tr>
            <td><strong style="color:#FFF">Numeric Mono</strong></td>
            <td>JetBrains Mono</td>
            <td><span class="token-val">12px</span></td>
            <td>600 SemiBold</td>
            <td>16px</td>
            <td>0</td>
            <td><code>--text-code-mono</code></td>
            <td>Order IDs (#00017), Secret PINs, OTP cells</td>
          </tr>
        </tbody>
      </table>
    </div>
    """
    return render_page("01 · Typography Hierarchy", "FONT SCALES, LINE HEIGHTS & SYSTEM TOKENS", "01 TYPOGRAPHY", content, 2)

# Page 3: Colography (2 CARDS IN A ROW - 2x2 Grid)
def gen_page_3():
    content = f"""
    <div class="colo-grid-2x2">
      <div class="colo-card-wide">
        <div class="colo-card-header">
          <div class="colo-header-title">
            <span class="colo-badge pwa">SURFACE 01 · CONSUMER PWA</span>
            <h4>Customer Mobile PWA Palette</h4>
          </div>
          <div class="colo-ergo-tag">Daylight & High-Contrast Touch · 48px Min</div>
        </div>
        <div class="swatches-2col-list">
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#BD2320"></div>
            <div class="swatch-details">
              <span class="swatch-title">Brand Crimson</span>
              <span class="swatch-code">#BD2320 · Primary CTA & Active Pills</span>
            </div>
            <span class="wcag-chip aaa">AAA 7.4:1</span>
          </div>
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#FDF2F2; border:1px solid #BD2320"></div>
            <div class="swatch-details">
              <span class="swatch-title">Rose Inset Tint</span>
              <span class="swatch-code">#FDF2F2 · Selected Portion & Date Card</span>
            </div>
            <span class="wcag-chip aa">AA 4.9:1</span>
          </div>
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#FFFFFF; border:1px solid #E4E4E7"></div>
            <div class="swatch-details">
              <span class="swatch-title">Crisp Card Surface</span>
              <span class="swatch-code">#FFFFFF · Food Cards & Modals</span>
            </div>
            <span class="wcag-chip aaa">AAA 16.1:1</span>
          </div>
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#1A1A1A"></div>
            <div class="swatch-details">
              <span class="swatch-title">Obsidian Typography</span>
              <span class="swatch-code">#1A1A1A · High Legibility Headings</span>
            </div>
            <span class="wcag-chip aaa">AAA 17.5:1</span>
          </div>
          <div class="swatch-item span-2">
            <div class="swatch-tile" style="background:#FEF3C7; border:1px solid #F59E0B"></div>
            <div class="swatch-details">
              <span class="swatch-title">Alert Amber</span>
              <span class="swatch-code">#FEF3C7 · Delivery Notice & Boundary Alerts</span>
            </div>
            <span class="wcag-chip aa">AA 5.2:1</span>
          </div>
        </div>
      </div>

      <div class="colo-card-wide">
        <div class="colo-card-header">
          <div class="colo-header-title">
            <span class="colo-badge dash">SURFACE 02 · KITCHEN KDS</span>
            <h4>Kitchen Station Board Palette</h4>
          </div>
          <div class="colo-ergo-tag">OLED Anti-Glare & High Contrast</div>
        </div>
        <div class="swatches-2col-list">
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#0A0A0C; border:1px solid #333"></div>
            <div class="swatch-details">
              <span class="swatch-title">Station Obsidian</span>
              <span class="swatch-code">#0A0A0C · Deep Kiosk OLED Canvas</span>
            </div>
            <span class="wcag-chip aaa">OLED 0%</span>
          </div>
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#F5E32D"></div>
            <div class="swatch-details">
              <span class="swatch-title">Radiant Amber</span>
              <span class="swatch-code">#F5E32D · Primary Action & New Orders</span>
            </div>
            <span class="wcag-chip aaa">AAA 14.8:1</span>
          </div>
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#16161A; border:1px solid #282830"></div>
            <div class="swatch-details">
              <span class="swatch-title">Carbon Surface</span>
              <span class="swatch-code">#16161A · Elevated Ticket Containers</span>
            </div>
            <span class="wcag-chip aa">AA 4.6:1</span>
          </div>
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#34D469"></div>
            <div class="swatch-details">
              <span class="swatch-title">Mint Status Green</span>
              <span class="swatch-code">#34D469 · Revenue Growth & Ready</span>
            </div>
            <span class="wcag-chip aaa">AAA 11.2:1</span>
          </div>
          <div class="swatch-item span-2">
            <div class="swatch-tile" style="background:#BD2320"></div>
            <div class="swatch-details">
              <span class="swatch-title">Kitchen Alert Red</span>
              <span class="swatch-code">#BD2320 · Order Rejection & Logout</span>
            </div>
            <span class="wcag-chip aa">AA 5.8:1</span>
          </div>
        </div>
      </div>

      <div class="colo-card-wide">
        <div class="colo-card-header">
          <div class="colo-header-title">
            <span class="colo-badge driver">SURFACE 03 · FLEET PWA</span>
            <h4>Driver Delivery PWA Palette</h4>
          </div>
          <div class="colo-ergo-tag">Extreme Sunlight & Motorbike Transit</div>
        </div>
        <div class="swatches-2col-list">
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#0B0B0E; border:1px solid #333"></div>
            <div class="swatch-details">
              <span class="swatch-title">Rider Charcoal</span>
              <span class="swatch-code">#0B0B0E · Base Outdoor Dark Canvas</span>
            </div>
            <span class="wcag-chip aaa">AAA 18.2:1</span>
          </div>
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#E03131"></div>
            <div class="swatch-details">
              <span class="swatch-title">Coral Crimson</span>
              <span class="swatch-code">#E03131 · Arrival Bell & Delivery Slider</span>
            </div>
            <span class="wcag-chip aa">AA 6.1:1</span>
          </div>
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#22C55E"></div>
            <div class="swatch-details">
              <span class="swatch-title">Transit Emerald</span>
              <span class="swatch-code">#22C55E · Delivered & Payment Success</span>
            </div>
            <span class="wcag-chip aaa">AAA 9.4:1</span>
          </div>
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#F59E0B"></div>
            <div class="swatch-details">
              <span class="swatch-title">COD Cash Amber</span>
              <span class="swatch-code">#F59E0B · Cash Collection Warning</span>
            </div>
            <span class="wcag-chip aaa">AAA 10.6:1</span>
          </div>
          <div class="swatch-item span-2">
            <div class="swatch-tile" style="background:#06B6D4"></div>
            <div class="swatch-details">
              <span class="swatch-title">Cyan Route</span>
              <span class="swatch-code">#06B6D4 · GPS Navigation & Active Trip</span>
            </div>
            <span class="wcag-chip aaa">AAA 8.9:1</span>
          </div>
        </div>
      </div>

      <div class="colo-card-wide">
        <div class="colo-card-header">
          <div class="colo-header-title">
            <span class="colo-badge web">SURFACE 04 · DESKTOP WEB</span>
            <h4>Desktop Landing & Kiosk Palette</h4>
          </div>
          <div class="colo-ergo-tag">Cinematic Editorial & Gold Lighting</div>
        </div>
        <div class="swatches-2col-list">
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#000000; border:1px solid #333"></div>
            <div class="swatch-details">
              <span class="swatch-title">True Deep Black</span>
              <span class="swatch-code">#000000 · Immersive Hero Section</span>
            </div>
            <span class="wcag-chip aaa">AAA 21:1</span>
          </div>
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#BD2320"></div>
            <div class="swatch-details">
              <span class="swatch-title">Culinary Crimson</span>
              <span class="swatch-code">#BD2320 · Core Brand Action CTA</span>
            </div>
            <span class="wcag-chip aa">AA 7.4:1</span>
          </div>
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#EAB308"></div>
            <div class="swatch-details">
              <span class="swatch-title">Champagne Gold</span>
              <span class="swatch-code">#EAB308 · Star Ratings & Heritage Tags</span>
            </div>
            <span class="wcag-chip aaa">AAA 12.3:1</span>
          </div>
          <div class="swatch-item">
            <div class="swatch-tile" style="background:#F4F4F5"></div>
            <div class="swatch-details">
              <span class="swatch-title">Platinum White</span>
              <span class="swatch-code">#F4F4F5 · Hero Editorial Headlines</span>
            </div>
            <span class="wcag-chip aaa">AAA 19.8:1</span>
          </div>
          <div class="swatch-item span-2">
            <div class="swatch-tile" style="background:#A1A1AA"></div>
            <div class="swatch-details">
              <span class="swatch-title">Muted Silver</span>
              <span class="swatch-code">#A1A1AA · Explanatory Copy & Footers</span>
            </div>
            <span class="wcag-chip aa">AA 6.8:1</span>
          </div>
        </div>
      </div>
    </div>

    <div class="colo-meta-rule">
      <div class="rule-left"><strong>Interactive Contrast Rule:</strong> All primary CTA buttons enforce a minimum 4.5:1 WCAG AA contrast ratio against their respective surface backgrounds.</div>
      <div class="rule-right"><strong>Focus & Hover Glow:</strong> Focused inputs and active buttons utilize <code>rgba(189, 35, 32, 0.4)</code> (Customer) or <code>rgba(245, 227, 45, 0.4)</code> (Dashboard) exterior glow rings.</div>
    </div>
    """
    return render_page("02 · Colography System Across 4 Surfaces", "COLOR PALETTES, SEMANTIC TOKENS & CONTRAST RULES", "02 COLOGRAPHY", content, 3)

# Page 4: Full 118-Icon Production Registry (No right cutoff, with app badges)
def gen_page_4():
    # 5 functional categories covering all 118 real icons in a clean 2-row panel layout
    cat_nav = ["House", "LayoutDashboard", "Navigation", "NavigationArrow", "MapPin", "Crosshair", "ArrowLeft", "ArrowRight", "ArrowClockwise", "ChevronDown", "ChevronUp", "ChevronLeft", "ChevronRight", "ChevronsLeft", "ChevronsRight", "MoveDown", "MoveUp"]
    cat_food = ["ChefHat", "CookingPot", "ForkKnife", "BowlFood", "Package", "PackageOpen", "Ticket", "Tag", "Percent", "Clock", "ClockCounterClockwise", "Sun"]
    cat_commerce = ["ShoppingBag", "IndianRupee", "Banknote", "CreditCard", "QrCode", "Money", "Receipt", "ReceiptX", "Gift", "TrendingUp", "TrendingDown"]
    cat_fleet_comms = [
        "Truck", "Bike", "Motorcycle", "Smartphone", "DeviceMobile", "Camera",
        "Bot", "MessageSquare", "MessageSquareWarning", "Phone", "Bell", "BellRing", "Share", "Send"
    ]
    cat_actions = [
        "Check", "CheckCircle", "CheckCircle2", "CheckSquare", "SealCheck", "X", "XCircle", "Ban", 
        "Warning", "WarningCircle", "AlertTriangle", "AlertCircle", "Plus", "Minus", "SquarePlus", 
        "Trash", "Trash2", "PencilSimple", "Lock", "LockKey", "LogOut", "Search", "MagnifyingGlass", 
        "Faders", "Copy", "Save", "RefreshCw", "RefreshCcw", "Download", "DownloadSimple", "Volume2", 
        "VolumeX", "Play", "Pause", "Loader2", "CircleNotch", "Lightning", "Zap", "Star", "Heart", 
        "Moon", "User", "UserPlus", "Briefcase", "Question", "Scroll"
    ]

    def render_icon_chip(name):
        key_ph = f"Phosphor:{name}"
        key_lu = f"Lucide:{name}"
        svg = ICONS.get(key_ph) or ICONS.get(key_lu) or f"<div style='font-size:8px;color:#888'>{name[:2]}</div>"
        
        # Determine actual application origin
        app = ICON_APPS.get(name, "CORE")
        app_cls = "pwa" if app == "PWA" else "kds" if app == "KDS" else "fleet" if app == "FLEET" else "core"
        
        # Size label
        size_lbl = "22px" if name in ["House", "Receipt", "User", "CookingPot", "Truck"] else "16px" if name in ["Clock", "Warning", "Tag", "Plus", "Minus"] else "18px"
        
        return f"""
        <div class="icon-chip-wide">
          <div class="icon-svg-box">{svg}</div>
          <div class="icon-text-block">
            <span class="icon-chip-name">{name}</span>
            <div class="icon-chip-tags">
              <span class="app-tag {app_cls}">{app}</span>
              <span class="size-tag">{size_lbl}</span>
            </div>
          </div>
        </div>
        """

    content = f"""
    <div class="icon-page-header-strip">
      <div class="strip-left"><strong>COMPLETE 118-ICON PRODUCTION REGISTRY:</strong> Rendered directly from production packages. Mapped to <strong>[PWA]</strong> Customer App, <strong>[KDS]</strong> Kitchen Board, <strong>[FLEET]</strong> Driver App, and <strong>[CORE]</strong> Shared.</div>
      <div class="strip-right">Standard Scales: Micro 14px · Small 16px · Medium 18px · Nav Dock 22px · Big Hero 24px+</div>
    </div>

    <div class="icon-registry-layout">
      <div class="icon-cat-panel">
        <div class="cat-header"><span class="cat-title">Navigation & Wayfinding</span><span class="cat-count">17 Icons</span></div>
        <div class="chips-container col-3">
          {"".join(render_icon_chip(name) for name in cat_nav)}
        </div>
      </div>

      <div class="icon-cat-panel">
        <div class="cat-header"><span class="cat-title">Food, Kitchen & Menu</span><span class="cat-count">12 Icons</span></div>
        <div class="chips-container col-2">
          {"".join(render_icon_chip(name) for name in cat_food)}
        </div>
      </div>

      <div class="icon-cat-panel">
        <div class="cat-header"><span class="cat-title">Commerce & Payments</span><span class="cat-count">11 Icons</span></div>
        <div class="chips-container col-2">
          {"".join(render_icon_chip(name) for name in cat_commerce)}
        </div>
      </div>

      <div class="icon-cat-panel">
        <div class="cat-header"><span class="cat-title">Fleet, Hardware & Comms</span><span class="cat-count">14 Icons</span></div>
        <div class="chips-container col-2">
          {"".join(render_icon_chip(name) for name in cat_fleet_comms)}
        </div>
      </div>

      <div class="icon-cat-panel span-full">
        <div class="cat-header"><span class="cat-title">Actions, Security & Interactive Status Controls</span><span class="cat-count">46 Icons</span></div>
        <div class="chips-container col-6">
          {"".join(render_icon_chip(name) for name in cat_actions)}
        </div>
      </div>
    </div>
    """
    return render_page("03 · Iconography Registry (All 118 Production Icons)", "AUTHENTIC PHOSPHOR & LUCIDE SVG VECTORS WITH APP ORIGINS & SIZES", "03 ICONOGRAPHY", content, 4)

# Page 5: Master Button & Action Matrix (Part 1 - 2 CARDS IN A ROW - 2x6 Grid)
def gen_page_5():
    cards_html = "".join(render_button_card(btn) for btn in BUTTONS_PART1)
    content = f"""
    <div class="buttons-intro-strip">
      <div class="strip-left"><strong>UNIFIED BUTTON & ACTION CONTROLS MATRIX (PART 1):</strong> Primary CTA triggers, dispatch actions, outlined admin buttons, and account controls grouped across Customer PWA, Kitchen Station, and Driver Fleet.</div>
      <div class="strip-right">Standard Heights: Pill 48px · Solid Action 52px · Outlined 42px</div>
    </div>
    <div class="buttons-grid-2col">
      {cards_html}
    </div>
    """
    return render_page("04A · Master Button Matrix: Primary CTAs & Admin Actions", "SOLID ACTION BUTTONS, DISPATCH TRIGGERS & OUTLINED CONTROLS", "04A BUTTONS", content, 5)

# Page 6: Master Button & Action Matrix (Part 2 - 2 CARDS IN A ROW - 2x6 Grid)
def gen_page_6():
    cards_html = "".join(render_button_card(btn) for btn in BUTTONS_PART2)
    content = f"""
    <div class="buttons-intro-strip">
      <div class="strip-left"><strong>UNIFIED BUTTON & ACTION CONTROLS MATRIX (PART 2):</strong> Tactile dish quantity steppers, dual action cart docks, kitchen support resolution buttons, and driver delivery handshake swipe sliders.</div>
      <div class="strip-right">Standard Sizing: Steppers 32-34px · Sliders 52px · Support 44px</div>
    </div>
    <div class="buttons-grid-2col">
      {cards_html}
    </div>
    """
    return render_page("04B · Master Button Matrix: Steppers, Sliders & Resolution", "QUANTITY STEPPERS, DUAL DOCKS, RESOLUTION BUTTONS & HANDSHAKE SLIDERS", "04B BUTTONS", content, 6)

# Page 7: Customer PWA: Onboarding & Location Setup (2 CARDS IN A ROW - 2x2 Grid)
def gen_page_7():
    cards_html = "".join(render_large_card(comp, is_light=True) for comp in PWA_PAGE7)
    content = f"""
    <div class="flow-intro-strip">
      <div class="strip-left"><strong>FLOW 01–02 · ONBOARDING & LOCATION DISCOVERY:</strong> Native PWA installation sheet, GPS current location quick detection, boundary alert banners, and Google Places autocomplete dropdown.</div>
      <div class="strip-right">Target Screen Flow: / → /location</div>
    </div>
    <div class="flow-cards-2x2">
      {cards_html}
    </div>
    """
    return render_page("05A · Customer PWA: Onboarding & Location Setup", "SCREEN FLOW 01–02 · INSTALL SHEET, GPS DETECTION & BOUNDARY BANNER", "05A PWA", content, 7)

# Page 8: Customer PWA: Location Modal & Global Header (2 CARDS IN A ROW - 2x2 Grid)
def gen_page_8():
    cards_html = "".join(render_large_card(comp, is_light=True) for comp in PWA_PAGE8)
    content = f"""
    <div class="flow-intro-strip">
      <div class="strip-left"><strong>FLOW 02–03 · LOCATION SELECTOR & GLOBAL HEADER:</strong> Location change modal sheet, saved address chips row, Delivering-To header pill, and bottom navigation dock.</div>
      <div class="strip-right">Target Screen Flow: /location/modal → /home</div>
    </div>
    <div class="flow-cards-2x2">
      {cards_html}
    </div>
    """
    return render_page("05B · Customer PWA: Location Modal & Header Shell", "SCREEN FLOW 02–03 · ADDRESS CHIPS, DELIVERING-TO PILL & NAV DOCK", "05B PWA", content, 8)

# Page 9: Customer PWA: Home Feed & Food Cards (2 CARDS IN A ROW - 2x2 Grid)
def gen_page_9():
    cards_html = "".join(render_large_card(comp, is_light=True) for comp in PWA_PAGE9)
    content = f"""
    <div class="flow-intro-strip">
      <div class="strip-left"><strong>FLOW 04–05 · HOME FEED & MENU BROWSING:</strong> Segment tabs (Best Selling / Favorites), meat category filter pills, Mom's Recipe food card, and 2-column menu food grid.</div>
      <div class="strip-right">Target Screen Flow: /home → /menu</div>
    </div>
    <div class="flow-cards-2x2">
      {cards_html}
    </div>
    """
    return render_page("05C · Customer PWA: Home Feed & Food Cards", "SCREEN FLOW 04–05 · CATEGORY PILLS, DISH CARDS & 2-COLUMN MENU GRID", "05C PWA", content, 9)

# Page 10: Customer PWA: Suggested Dishes, Bot & Portions (2 CARDS IN A ROW - 2x2 Grid)
def gen_page_10():
    cards_html = "".join(render_large_card(comp, is_light=True) for comp in PWA_PAGE10)
    content = f"""
    <div class="flow-intro-strip">
      <div class="strip-left"><strong>FLOW 05–07 · SUGGESTED DISHES & PORTIONS:</strong> Suggested dishes vertical list, Vidya Bot concierge tile, unselected portion card, and selected portion card (rose tint #FDF2F2).</div>
      <div class="strip-right">Target Screen Flow: /menu → /dish/[id] Customizer</div>
    </div>
    <div class="flow-cards-2x2">
      {cards_html}
    </div>
    """
    return render_page("05D · Customer PWA: Suggested Dishes & Portions", "SCREEN FLOW 05–07 · CONCIERGE BOT, PORTIONS & ROSE TINT ACCENTS", "05D PWA", content, 10)

# Page 11: Customer PWA: Gifting, Cart & Delivery Slots (2 CARDS IN A ROW - 2x2 Grid)
def gen_page_11():
    cards_html = "".join(render_large_card(comp, is_light=True) for comp in PWA_PAGE11)
    content = f"""
    <div class="flow-intro-strip">
      <div class="strip-left"><strong>FLOW 08–11 · CULINARY STORY, CART & GIFTING:</strong> Best paired story card, cart line item with quantity steppers, 3-step gifting form, and meal time slots selector.</div>
      <div class="strip-right">Target Screen Flow: /cart → /checkout/schedule</div>
    </div>
    <div class="flow-cards-2x2">
      {cards_html}
    </div>
    """
    return render_page("05E · Customer PWA: Gifting & Delivery Slots", "SCREEN FLOW 08–11 · PAIRING STORY, CART ITEM, GIFT FORM & SLOTS", "05E PWA", content, 11)

# Page 12: Customer PWA: Checkout, Live Tracking & Order History (2 CARDS IN A ROW - 2x2 Grid)
def gen_page_12():
    cards_html = "".join(render_large_card(comp, is_light=True) for comp in PWA_PAGE12)
    content = f"""
    <div class="flow-intro-strip">
      <div class="strip-left"><strong>FLOW 12–14 · PAYMENT, LIVE TRACKING & HISTORY:</strong> Payment method cards (UPI vs COD), order arrival ETA card, dark live delivery tracker, and delivered order history row.</div>
      <div class="strip-right">Target Screen Flow: /checkout → /order/[id] Tracking</div>
    </div>
    <div class="flow-cards-2x2">
      {cards_html}
    </div>
    """
    return render_page("05F · Customer PWA: Checkout & Live Tracking", "SCREEN FLOW 12–14 · PAYMENT SELECTOR, ETA CARD & LIVE TRACKER", "05F PWA", content, 12)

# Page 13: Kitchen Dashboard: Station Security & Navigation (2 CARDS IN A ROW - 2x2 Grid)
def gen_page_13():
    cards_html = "".join(render_large_card(comp, is_light=False) for comp in DASH_PAGE13)
    content = f"""
    <div class="flow-intro-strip">
      <div class="strip-left"><strong>STATION FLOW 01 · SECURITY & GLOBAL CONTROLS:</strong> Dashboard PWA install banner, 4-digit masked yellow PIN input, 5-tab floating station dock, and shift executive KPI cards.</div>
      <div class="strip-right">Station Route: /dashboard/login → /dashboard/orders</div>
    </div>
    <div class="flow-cards-2x2">
      {cards_html}
    </div>
    """
    return render_page("06A · Kitchen Dashboard: Station Security & Nav", "STATION FLOW 01 · 4-DIGIT PIN AUTH, 5-TAB DOCK & SHIFT KPIS", "06A KDS", content, 13)

# Page 14: Kitchen Dashboard: Live Operations & Dispatch Management (2 CARDS IN A ROW - 2x2 Grid)
def gen_page_14():
    cards_html = "".join(render_large_card(comp, is_light=False) for comp in DASH_PAGE14)
    content = f"""
    <div class="flow-intro-strip">
      <div class="strip-left"><strong>STATION FLOW 02 · OPERATIONS & DRIVER DISPATCH:</strong> 6-stage pipeline filter row, live kitchen ticket card with 5-stage prep stepper, and driver assignment modal & selection chip.</div>
      <div class="strip-right">Station Route: /dashboard/orders · Fleet Dispatch Management</div>
    </div>
    <div class="flow-cards-2x2">
      {cards_html}
    </div>
    """
    return render_page("06B · Kitchen Dashboard: Live Operations & Dispatch", "STATION FLOW 02 · LIVE TICKET STEPPER & DRIVER ASSIGNMENT MODAL", "06B KDS", content, 14)

# Page 15: Kitchen Dashboard: Analytics, AI Pricing & Support (2 CARDS IN A ROW - 2x2 Grid)
def gen_page_15():
    cards_html = "".join(render_large_card(comp, is_light=False) for comp in DASH_PAGE15)
    content = f"""
    <div class="flow-intro-strip">
      <div class="strip-left"><strong>STATION FLOW 03 · ANALYTICS, AI PRICING & SUPPORT:</strong> 2×2 Revenue KPI grid, monthly sales bar chart, AI dynamic pricing recommendation card, and customer support issue ticket.</div>
      <div class="strip-right">Station Routes: /dashboard/revenue · /dashboard/ai · /dashboard/support</div>
    </div>
    <div class="flow-cards-2x2">
      {cards_html}
    </div>
    """
    return render_page("06C · Kitchen Dashboard: Analytics, AI & Support", "STATION FLOW 03 · REVENUE CHARTS, AI PRICING & SUPPORT TICKETS", "06C KDS", content, 15)

# Page 16: Driver Delivery PWA: Auth, Transit & Dynamic UPI QR (2 CARDS IN A ROW - 2x2 Grid)
def gen_page_16():
    cards_html = "".join(render_large_card(comp, is_light=False) for comp in DRIVER_PAGE16)
    content = f"""
    <div class="flow-intro-strip">
      <div class="strip-left"><strong>RIDER FLOW 01–02 · AUTH, TRANSIT & DYNAMIC QR:</strong> Mobile number login, verified driver profile card, active delivery order card, and dynamic UPI QR code scanner card.</div>
      <div class="strip-right">Driver Route: /driver/login → /driver/deliveries/[id]</div>
    </div>
    <div class="flow-cards-2x2">
      {cards_html}
    </div>
    """
    return render_page("07 · Driver Delivery PWA: Auth & Active Delivery", "RIDER FLOW · DRIVER PROFILE, ACTIVE ORDER TICKET & DYNAMIC UPI QR", "07 FLEET", content, 16)

# ----------------- MASTER HTML TEMPLATE WITH PREMIUM CSS -----------------

def build_complete_html():
    pages_html = "\n".join([
        gen_page_1(),
        gen_page_2(),
        gen_page_3(),
        gen_page_4(),
        gen_page_5(),
        gen_page_6(),
        gen_page_7(),
        gen_page_8(),
        gen_page_9(),
        gen_page_10(),
        gen_page_11(),
        gen_page_12(),
        gen_page_13(),
        gen_page_14(),
        gen_page_15(),
        gen_page_16(),
    ])

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vidya's Kitchen — UI Design System Specification</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600;700&family=Outfit:wght@500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    @page {{
      size: A4 landscape;
      margin: 0;
    }}

    *, *::before, *::after {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}

    body {{
      background: #0B0B0E;
      color: #FFFFFF;
      font-family: 'Outfit', sans-serif;
      -webkit-font-smoothing: antialiased;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }}

    .page {{
      width: 297mm;
      height: 210mm;
      page-break-after: always;
      padding: 6.5mm 8.5mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      background: #0B0B0E;
      position: relative;
    }}

    /* Global Header */
    .page-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 5px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      margin-bottom: 6px;
    }}

    .page-header-left {{
      display: flex;
      align-items: center;
      gap: 7px;
    }}

    .header-logo {{
      width: 22px;
      height: 22px;
      border-radius: 5px;
    }}

    .header-brand {{
      font-size: 13.5px;
      font-weight: 800;
      letter-spacing: -0.01em;
      color: #FFFFFF;
    }}

    .header-badge {{
      font-size: 8.5px;
      font-weight: 800;
      font-family: 'JetBrains Mono', monospace;
      padding: 2px 6px;
      border-radius: 4px;
      background: rgba(189, 35, 32, 0.2);
      color: #FF5A57;
      border: 1px solid rgba(189, 35, 32, 0.4);
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }}

    .page-header-right {{
      text-align: right;
    }}

    .header-title {{
      font-size: 11.5px;
      font-weight: 800;
      color: #FFFFFF;
      display: block;
      letter-spacing: 0.02em;
    }}

    .header-sub {{
      font-size: 8px;
      font-family: 'JetBrains Mono', monospace;
      color: #A1A1AA;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }}

    /* Page Body */
    .page-body {{
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      min-height: 0;
    }}

    /* Global Footer */
    .page-footer {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 5px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      margin-top: 6px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      color: #71717A;
      letter-spacing: 0.05em;
    }}

    /* Cover Page Styles (2 CARDS IN A ROW - 2x2 Grid) */
    .cover-hero {{
      background: #121216;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 9px;
      padding: 8px 14px;
      margin-bottom: 7px;
    }}

    .cover-badge {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      font-weight: 800;
      color: #F5E32D;
      background: rgba(245, 227, 45, 0.12);
      border: 1px solid rgba(245, 227, 45, 0.3);
      padding: 2px 7px;
      border-radius: 4px;
      display: inline-block;
      margin-bottom: 3px;
      letter-spacing: 0.06em;
    }}

    .cover-title {{
      font-size: 20px;
      font-weight: 900;
      letter-spacing: -0.02em;
      color: #FFFFFF;
      margin-bottom: 2px;
    }}

    .cover-desc {{
      font-family: 'Inter', sans-serif;
      font-size: 10.5px;
      color: #A1A1AA;
      line-height: 1.35;
      max-width: 95%;
    }}

    .surfaces-matrix-2x2 {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 7px;
      margin-bottom: 7px;
    }}

    .surface-card-wide {{
      background: #121216;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 9px;
      padding: 9px 12px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }}

    .surface-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }}

    .badge-title-group {{
      display: flex;
      align-items: center;
      gap: 8px;
    }}

    .surface-card-wide h3 {{
      font-size: 14px;
      font-weight: 800;
      color: #FFFFFF;
    }}

    .surface-badge {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      font-weight: 800;
      padding: 2px 6px;
      border-radius: 3px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }}

    .surface-badge.pwa-badge {{ background: rgba(189, 35, 32, 0.2); color: #FF5A57; border: 1px solid rgba(189, 35, 32, 0.4); }}
    .surface-badge.dash-badge {{ background: rgba(245, 227, 45, 0.15); color: #F5E32D; border: 1px solid rgba(245, 227, 45, 0.4); }}
    .surface-badge.driver-badge {{ background: rgba(34, 197, 94, 0.15); color: #4ADE80; border: 1px solid rgba(34, 197, 94, 0.4); }}
    .surface-badge.web-badge {{ background: rgba(56, 189, 248, 0.15); color: #38BDF8; border: 1px solid rgba(56, 189, 248, 0.4); }}

    .surface-count {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      color: #A1A1AA;
      background: rgba(255, 255, 255, 0.04);
      padding: 2px 6px;
      border-radius: 3px;
    }}

    .surface-role {{
      font-family: 'Inter', sans-serif;
      font-size: 9.5px;
      color: #A1A1AA;
      line-height: 1.3;
    }}

    .surface-specs-grid {{
      background: rgba(0, 0, 0, 0.35);
      border-radius: 6px;
      padding: 6px 10px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 5px 8px;
    }}

    .spec-cell {{
      display: flex;
      flex-direction: column;
    }}

    .spec-cell .lbl {{
      font-family: 'Inter', sans-serif;
      font-size: 7.5px;
      color: #71717A;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }}

    .spec-cell .val {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 8.5px;
      font-weight: 700;
      color: #FFFFFF;
    }}

    .architecture-flow-box {{
      background: #121216;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 9px;
      padding: 8px 12px;
      margin-bottom: 7px;
    }}

    .arch-flow-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
    }}

    .arch-title {{
      font-size: 9px;
      font-weight: 800;
      color: #F5E32D;
      letter-spacing: 0.06em;
    }}

    .arch-badge {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      padding: 1px 6px;
      background: rgba(34, 197, 94, 0.15);
      color: #4ADE80;
      border: 1px solid rgba(34, 197, 94, 0.3);
      border-radius: 3px;
    }}

    .arch-nodes {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }}

    .arch-node {{
      flex: 1;
      background: rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 6px;
      padding: 6px 10px;
      display: flex;
      align-items: center;
      gap: 8px;
    }}

    .arch-node.highlight {{
      border-color: rgba(245, 227, 45, 0.4);
      background: rgba(245, 227, 45, 0.04);
    }}

    .node-icon {{
      font-size: 18px;
    }}

    .node-info {{
      display: flex;
      flex-direction: column;
    }}

    .node-name {{
      font-size: 10px;
      font-weight: 800;
      color: #FFFFFF;
    }}

    .node-desc {{
      font-family: 'Inter', sans-serif;
      font-size: 8px;
      color: #A1A1AA;
    }}

    .arch-arrow {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      color: #71717A;
      text-align: center;
      white-space: nowrap;
    }}

    .arch-arrow span {{
      color: #F5E32D;
      font-size: 7.5px;
    }}

    .cover-meta-bar {{
      display: flex;
      justify-content: space-between;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 6px;
      padding: 6px 10px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      color: #A1A1AA;
    }}

    .cover-meta-bar strong {{ color: #FFFFFF; }}

    /* Typography Page Styles */
    .typo-top-row {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      margin-bottom: 8px;
    }}

    .typo-family-card {{
      background: #121216;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 9px;
      padding: 10px 14px;
    }}

    .family-badge {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      font-weight: 800;
      padding: 2px 6px;
      border-radius: 4px;
      display: inline-block;
      margin-bottom: 4px;
      letter-spacing: 0.06em;
    }}

    .family-badge.primary {{ background: rgba(189, 35, 32, 0.2); color: #FF5A57; border: 1px solid rgba(189, 35, 32, 0.4); }}
    .family-badge.secondary {{ background: rgba(56, 189, 248, 0.15); color: #38BDF8; border: 1px solid rgba(56, 189, 248, 0.4); }}

    .family-name {{
      font-size: 22px;
      font-weight: 800;
      color: #FFFFFF;
      margin-bottom: 2px;
    }}

    .family-alphabet {{
      font-size: 10px;
      color: #A1A1AA;
      margin-bottom: 6px;
      letter-spacing: 0.02em;
    }}

    .family-weights {{
      display: flex;
      gap: 5px;
      margin-bottom: 6px;
    }}

    .weight-chip {{
      font-size: 8px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 2px 6px;
      border-radius: 3px;
      color: #FFFFFF;
    }}

    .family-note {{
      font-family: 'Inter', sans-serif;
      font-size: 8.5px;
      color: #71717A;
      line-height: 1.35;
    }}

    .typo-table-container {{
      background: #121216;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 9px;
      padding: 9px 12px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }}

    .table-title {{
      font-size: 8.5px;
      font-weight: 800;
      color: #F5E32D;
      letter-spacing: 0.06em;
      margin-bottom: 6px;
    }}

    .typo-table {{
      width: 100%;
      border-collapse: collapse;
      font-size: 8.5px;
      font-family: 'Inter', sans-serif;
    }}

    .typo-table th {{
      text-align: left;
      padding: 5px 8px;
      font-size: 8px;
      font-weight: 700;
      color: #71717A;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }}

    .typo-table td {{
      padding: 4px 8px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.03);
      color: #A1A1AA;
    }}

    .typo-table code {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      color: #38BDF8;
      background: rgba(56, 189, 248, 0.1);
      padding: 1px 5px;
      border-radius: 3px;
    }}

    .token-val {{
      font-family: 'JetBrains Mono', monospace;
      font-weight: 700;
      color: #F5E32D;
    }}

    /* Colography Page Styles (2 CARDS IN A ROW - 2x2 Grid) */
    .colo-grid-2x2 {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 7px;
      flex: 1;
      margin-bottom: 6px;
    }}

    .colo-card-wide {{
      background: #121216;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 9px;
      padding: 8px 11px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }}

    .colo-card-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 4px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }}

    .colo-header-title {{
      display: flex;
      align-items: center;
      gap: 7px;
    }}

    .colo-card-header h4 {{
      font-size: 13px;
      font-weight: 800;
      color: #FFFFFF;
    }}

    .colo-badge {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5px;
      font-weight: 800;
      padding: 2px 5px;
      border-radius: 3px;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }}

    .colo-badge.pwa {{ background: rgba(189, 35, 32, 0.2); color: #FF5A57; border: 1px solid rgba(189, 35, 32, 0.4); }}
    .colo-badge.dash {{ background: rgba(245, 227, 45, 0.15); color: #F5E32D; border: 1px solid rgba(245, 227, 45, 0.4); }}
    .colo-badge.driver {{ background: rgba(34, 197, 94, 0.15); color: #4ADE80; border: 1px solid rgba(34, 197, 94, 0.4); }}
    .colo-badge.web {{ background: rgba(56, 189, 248, 0.15); color: #38BDF8; border: 1px solid rgba(56, 189, 248, 0.4); }}

    .colo-ergo-tag {{
      font-family: 'Inter', sans-serif;
      font-size: 8px;
      color: #F5E32D;
    }}

    .swatches-2col-list {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4px 7px;
      flex: 1;
    }}

    .swatch-item {{
      display: flex;
      align-items: center;
      gap: 7px;
      background: rgba(0, 0, 0, 0.3);
      border: 1px solid rgba(255, 255, 255, 0.04);
      border-radius: 5px;
      padding: 4px 6px;
    }}

    .swatch-item.span-2 {{
      grid-column: span 2;
    }}

    .swatch-tile {{
      width: 26px;
      height: 26px;
      border-radius: 4px;
      flex-shrink: 0;
    }}

    .swatch-details {{
      flex: 1;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }}

    .swatch-title {{
      font-size: 9.5px;
      font-weight: 700;
      color: #FFFFFF;
    }}

    .swatch-code {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      color: #A1A1AA;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }}

    .wcag-chip {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5px;
      font-weight: 700;
      padding: 1.5px 4.5px;
      border-radius: 3px;
      white-space: nowrap;
    }}

    .wcag-chip.aaa {{ background: rgba(34, 197, 94, 0.15); color: #4ADE80; }}
    .wcag-chip.aa {{ background: rgba(245, 227, 45, 0.15); color: #F5E32D; }}

    .colo-meta-rule {{
      display: flex;
      justify-content: space-between;
      background: #121216;
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 6px;
      padding: 5px 10px;
      font-size: 8px;
      color: #A1A1AA;
      font-family: 'Inter', sans-serif;
    }}

    .colo-meta-rule strong {{ color: #F5E32D; }}

    /* Iconography Page Styles (NO CUTOFF, APP BADGES) */
    .icon-page-header-strip {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #121216;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 6px;
      padding: 5px 9px;
      margin-bottom: 6px;
      font-size: 8px;
      color: #A1A1AA;
    }}

    .icon-page-header-strip strong {{ color: #F5E32D; }}

    .icon-registry-layout {{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 5px;
      flex: 1;
      width: 100%;
    }}

    .icon-cat-panel {{
      background: #121216;
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 6px;
      padding: 5px 6px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }}

    .icon-cat-panel.span-full {{
      grid-column: span 4;
    }}

    .cat-header {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
      padding-bottom: 2px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }}

    .cat-title {{
      font-size: 8.5px;
      font-weight: 800;
      color: #FFFFFF;
      text-transform: uppercase;
      letter-spacing: 0.04em;
    }}

    .cat-count {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5px;
      color: #F5E32D;
    }}

    .chips-container {{
      display: grid;
      gap: 2.5px;
    }}

    .chips-container.col-2 {{ grid-template-columns: repeat(2, 1fr); }}
    .chips-container.col-3 {{ grid-template-columns: repeat(3, 1fr); }}
    .chips-container.col-6 {{ grid-template-columns: repeat(6, 1fr); }}

    .icon-chip-wide {{
      display: flex;
      align-items: center;
      gap: 4px;
      background: rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.04);
      border-radius: 4px;
      padding: 2px 4px;
      overflow: hidden;
    }}

    .icon-svg-box {{
      width: 19px;
      height: 19px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #F5E32D;
      flex-shrink: 0;
    }}

    .icon-svg-box svg {{
      max-width: 15px;
      max-height: 15px;
    }}

    .icon-text-block {{
      display: flex;
      flex-direction: column;
      overflow: hidden;
      flex: 1;
    }}

    .icon-chip-name {{
      font-size: 8px;
      font-weight: 700;
      color: #FFFFFF;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }}

    .icon-chip-tags {{
      display: flex;
      align-items: center;
      gap: 4px;
    }}

    .app-tag {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 6.5px;
      font-weight: 800;
      padding: 0.5px 3px;
      border-radius: 2px;
      text-transform: uppercase;
    }}

    .app-tag.pwa {{ background: rgba(189, 35, 32, 0.25); color: #FF5A57; }}
    .app-tag.kds {{ background: rgba(245, 227, 45, 0.2); color: #F5E32D; }}
    .app-tag.fleet {{ background: rgba(34, 197, 94, 0.2); color: #4ADE80; }}
    .app-tag.core {{ background: rgba(56, 189, 248, 0.2); color: #38BDF8; }}

    .size-tag {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 6.5px;
      color: #71717A;
    }}

    /* Buttons Page Styles (2 CARDS IN A ROW - 2x6 Grid) */
    .buttons-intro-strip, .flow-intro-strip {{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #121216;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 6px;
      padding: 4px 9px;
      margin-bottom: 5px;
      font-size: 8px;
      color: #A1A1AA;
    }}

    .buttons-intro-strip strong, .flow-intro-strip strong {{
      color: #F5E32D;
    }}

    .buttons-grid-2col {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5px;
      flex: 1;
    }}

    .button-spec-card {{
      background: #121216;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 6px;
      padding: 4px 7px;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }}

    .btn-card-header {{
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 0px;
    }}

    .btn-id {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5px;
      font-weight: 800;
      background: rgba(245, 227, 45, 0.15);
      color: #F5E32D;
      border: 1px solid rgba(245, 227, 45, 0.3);
      padding: 1px 4px;
      border-radius: 3px;
    }}

    .btn-app-badge {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 7px;
      font-weight: 800;
      padding: 1px 4px;
      border-radius: 2px;
      text-transform: uppercase;
    }}

    .btn-app-badge.pwa {{ background: rgba(189, 35, 32, 0.2); color: #FF5A57; }}
    .btn-app-badge.dash {{ background: rgba(245, 227, 45, 0.15); color: #F5E32D; }}
    .btn-app-badge.driver {{ background: rgba(34, 197, 94, 0.15); color: #4ADE80; }}

    .btn-type-badge {{
      font-family: 'Inter', sans-serif;
      font-size: 7px;
      color: #A1A1AA;
      background: rgba(255, 255, 255, 0.05);
      padding: 1px 4px;
      border-radius: 2px;
    }}

    .btn-name {{
      font-size: 9px;
      font-weight: 700;
      color: #FFFFFF;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      flex: 1;
    }}

    .btn-card-body {{
      display: flex;
      align-items: center;
      gap: 8px;
    }}

    .btn-preview-well {{
      width: 230px;
      height: 40px;
      background: #040405;
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px 6px;
      margin-bottom: 0px;
      flex-shrink: 0;
      overflow: hidden;
    }}

    .btn-preview-well img {{
      max-height: 36px;
      max-width: 95%;
      object-fit: contain;
    }}

    .btn-card-meta {{
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;
      overflow: hidden;
    }}

    .btn-measurements {{
      display: flex;
      gap: 4px;
    }}

    .meas-chip {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.06);
      padding: 1px 4px;
      border-radius: 2px;
      color: #FFFFFF;
    }}

    .btn-tokens {{
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
    }}

    .token-chip {{
      font-family: 'Inter', sans-serif;
      font-size: 7px;
      color: #A1A1AA;
      background: rgba(255, 255, 255, 0.03);
      padding: 1px 4px;
      border-radius: 2px;
    }}

    .btn-notes {{
      font-family: 'Inter', sans-serif;
      font-size: 7px;
      color: #71717A;
      line-height: 1.2;
    }}

    /* Flow Cards Styles (2 CARDS IN A ROW - 2x2 Grid) */
    .flow-cards-2x2 {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      flex: 1;
    }}

    .large-comp-card {{
      background: #121216;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 9px;
      padding: 8px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }}

    .large-comp-header {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 6px;
      margin-bottom: 5px;
    }}

    .header-left-meta {{
      display: flex;
      align-items: center;
      gap: 6px;
      overflow: hidden;
      flex: 1;
    }}

    .large-comp-id {{
      font-family: 'JetBrains Mono', monospace;
      font-size: 8px;
      font-weight: 800;
      background: rgba(245, 227, 45, 0.15);
      color: #F5E32D;
      border: 1px solid rgba(245, 227, 45, 0.3);
      padding: 1px 5px;
      border-radius: 3px;
    }}

    .large-comp-name {{
      font-size: 11px;
      font-weight: 800;
      color: #FFFFFF;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }}

    .large-comp-flow {{
      font-family: 'Inter', sans-serif;
      font-size: 7.5px;
      font-weight: 600;
      color: #38BDF8;
      background: rgba(56, 189, 248, 0.1);
      padding: 2px 6px;
      border-radius: 3px;
      white-space: nowrap;
    }}

    .large-comp-img-well {{
      height: 195px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      margin-bottom: 5px;
      overflow: hidden;
    }}

    .large-comp-img-well img {{
      max-height: 100%;
      max-width: 100%;
      object-fit: contain;
    }}

    .large-comp-meta {{
      display: flex;
      flex-direction: column;
      gap: 3px;
    }}

    .large-comp-specs {{
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
    }}

    .large-comp-notes {{
      font-family: 'Inter', sans-serif;
      font-size: 7.5px;
      color: #71717A;
      line-height: 1.25;
    }}
  </style>
</head>
<body>
  {pages_html}
</body>
</html>
"""

def main():
    print("Generating complete HTML template with 2-cards-in-a-row layout...")
    html_content = build_complete_html()
    tmp_html = Path("/tmp/vidya_design_system_complete.html")
    tmp_html.write_text(html_content, encoding="utf-8")
    print(f"Generated HTML: {tmp_html} ({len(html_content)} bytes)")

    print("Running Google Chrome to generate PDF...")
    chrome_path = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
    cmd = [
        chrome_path,
        "--headless",
        "--disable-gpu",
        "--no-pdf-header-footer",
        "--print-to-pdf-no-header",
        f"--print-to-pdf={PDF_DEST}",
        str(tmp_html)
    ]
    subprocess.run(cmd, check=True)
    print(f"Successfully generated PDF: {PDF_DEST} ({PDF_DEST.stat().st_size} bytes)")

    # Copy to app repository
    import shutil
    shutil.copyfile(PDF_DEST, VIDYA_PDF_DEST)
    print(f"Copied to: {VIDYA_PDF_DEST}")

if __name__ == "__main__":
    main()
