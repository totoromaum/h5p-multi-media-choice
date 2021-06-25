/**
 * Utility class for multi media choice
 */
export class Util {
  /**
   * Extends params
   * @param {Object} params params from the editor
   * @returns {Object} params with defaults included
   */
  static extendParams(params) {
    return Util.deepExtend(
      {
        question: null,
        behaviour: {
          enableSolutionsButton: true,
          enableRetry: true,
          questionType: 'auto',
          confirmCheckDialog: false,
          confirmRetryDialog: false,
          aspectRatio: 'auto',
          sameAspectRatio: false
        },
        l10n: {
          checkAnswerButtonText: 'Check',
          checkAnswer:
            'Check the answers. The responses will be marked as correct, incorrect, or unanswered.',
          showSolutionButtonText: 'Show solution',
          showSolution:
            'Show the solution. The task will be marked with its correct solution.',
          noAnswer: 'Please answer before viewing the solution',
          retryText: 'Retry',
          retry:
            'Retry the task. Reset all responses and start the task over again.',
          result: 'You got :num out of :total points',
          confirmCheck: {
            header: 'Finish?',
            body: 'Are you sure you want to finish?',
            cancelLabel: 'Cancel',
            confirmLabel: 'Finish'
          },
          confirmRetry: {
            header: 'Retry?',
            body: 'Are you sure you wish to retry?',
            cancelLabel: 'Cancel',
            confirmLabel: 'Retry'
          }
        }
      },
      params
    );
  }

  /**
   * Merge the contents of two or more objects together and return it
   * @param {Object} out
   */
  static deepExtend(out) {
    out = out || {};

    for (let i = 1; i < arguments.length; i++) {
      const obj = arguments[i];

      if (!obj) {
        continue;
      }

      if (Array.isArray(obj)) {
        out = obj;
      }

      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          if (typeof obj[key] === 'object') {
            out[key] = Util.deepExtend(out[key], obj[key]);
          }
          else {
            out[key] = obj[key];
          }
        }
      }
    }

    return out;
  }
}
