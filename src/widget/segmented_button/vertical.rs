// Copyright 2022 System76 <info@system76.com>
// SPDX-License-Identifier: MPL-2.0

//! Implementation details for the vertical layout of a segmented button.

use super::model::{Model, Selectable};
use super::style::StyleSheet;
use super::widget::{LocalState, SegmentedButton, SegmentedVariant};

use iced::{Length, Rectangle, Size};
use iced_core::layout;

/// A type marker defining the vertical variant of a [`SegmentedButton`].
pub struct Vertical;

/// Vertical [`SegmentedButton`].
pub type VerticalSegmentedButton<'a, SelectionMode, Message> =
    SegmentedButton<'a, Vertical, SelectionMode, Message>;

/// Vertical implementation of the [`SegmentedButton`].
///
/// For details on the model, see the [`segmented_button`](super) module for more details.
#[must_use]
pub fn vertical<SelectionMode, Message>(
    model: &Model<SelectionMode>,
) -> SegmentedButton<Vertical, SelectionMode, Message>
where
    Model<SelectionMode>: Selectable,
    SelectionMode: Default,
{
    SegmentedButton::new(model)
}

impl<'a, SelectionMode, Message> SegmentedVariant
    for SegmentedButton<'a, Vertical, SelectionMode, Message>
where
    Model<SelectionMode>: Selectable,
    SelectionMode: Default,
{
    fn variant_appearance(
        theme: &crate::Theme,
        style: &crate::theme::SegmentedButton,
    ) -> super::Appearance {
        theme.vertical(style)
    }

    #[allow(clippy::cast_precision_loss)]
    fn variant_button_bounds(
        &self,
        _state: &LocalState,
        mut bounds: Rectangle,
        nth: usize,
    ) -> Option<Rectangle> {
        let num = self.model.items.len();
        if num != 0 {
            let spacing = f32::from(self.spacing);
            bounds.height = (bounds.height - (num as f32 * spacing) + spacing) / num as f32;

            if nth != 0 {
                bounds.y += (nth as f32 * bounds.height) + (nth as f32 * spacing);
            }
        }

        Some(bounds)
    }

    #[allow(clippy::cast_precision_loss)]
    #[allow(clippy::cast_possible_truncation)]
    #[allow(clippy::cast_sign_loss)]
    fn variant_layout(
        &self,
        state: &mut LocalState,
        renderer: &crate::Renderer,
        limits: &layout::Limits,
    ) -> layout::Node {
        let limits = limits.width(self.width);
        let (width, mut height) = self.max_button_dimensions(state, renderer, limits.max());

        let num = self.model.items.len();
        let spacing = f32::from(self.spacing);

        if num != 0 {
            height = (num as f32 * height) + (num as f32 * spacing) - spacing;
        }

        let size = limits
            .height(Length::Fixed(height))
            .resolve(Size::new(width, height));

        layout::Node::new(size)
    }
}
